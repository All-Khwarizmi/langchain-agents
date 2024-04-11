import { RunnableLike } from "@langchain/core/runnables";
import { Graph, BaseCheckpointSaver } from "@langchain/langgraph";
import { Pregel } from "@langchain/langgraph/pregel";
export declare const START = "__start__";

/* 

When using the `StateGraph` class, the `state` argument in the of the addNode callback is typed as any. In order to add type safety to the `state` argument, we need to create a custom type that extends the `StateGraphArgs` interface. Or we need to rewrite the `StateGraph` class to accept a generic type for the `state` argument.
*/
export declare abstract class BaseChannel<
  Value = unknown,
  Update = unknown, // Expected type of the parameter `update` is called with.
  C = unknown
> {
  /**
   * The name of the channel.
   */
  abstract lc_graph_name: string;
  /**
   * Return a new identical channel, optionally initialized from a checkpoint.
   * Can be thought of as a "restoration" from a checkpoint which is a "snapshot" of the channel's state.
   *
   * @param {C | undefined} checkpoint
   * @param {C | undefined} initialValue
   * @returns {this}
   */
  abstract empty(
    checkpoint?: C,
    initialValueFactory?: () => C
  ): BaseChannel<Value, Update, C>;
  /**
   * Update the channel's value with the given sequence of updates.
   * The order of the updates in the sequence is arbitrary.
   *
   * @throws {InvalidUpdateError} if the sequence of updates is invalid.
   * @param {Array<Update>} values
   * @returns {void}
   */
  abstract update(values: Update[]): void;
  /**
   * Return the current value of the channel.
   *
   * @throws {EmptyChannelError} if the channel is empty (never updated yet).
   * @returns {Value}
   */
  abstract get(): Value;
  /**
   * Return a string representation of the channel's current state.
   *
   * @throws {EmptyChannelError} if the channel is empty (never updated yet), or doesn't support checkpoints.
   * @returns {C | undefined}
   */
  abstract checkpoint(): C | undefined;
}
export type BinaryOperator<Value> = (a: Value, b: Value) => Value;

interface Channels extends Record<string, any> {}
type One = {
  [K in keyof Channels]:
    | {
        value: BinaryOperator<Channels[K]> | null;
        default?: () => Channels[K];
      }
    | string;
};
type Two = {
  value: BinaryOperator<unknown> | null;
  default?: () => unknown;
};

export interface StateGraphArgsCustom<Channels extends Record<string, any>> {
  channels: One | Two;
}

export declare class StateGraphCustom<
  Channels extends Record<string, any>
> extends Graph<Channels> {
  channels: Record<string, BaseChannel>;
  constructor(fields: StateGraphArgsCustom<Channels>);
  addNode(key: string, action: RunnableLike): void;
  compile(checkpointer?: BaseCheckpointSaver): Pregel;
}

export interface StateGraphArgs<Channels extends Record<string, any>> {
  channels:
    | {
        [K in keyof Channels]:
          | {
              value: BinaryOperator<Channels[K]> | null;
              default?: () => Channels[K];
            }
          | string;
      }
    | {
        value: BinaryOperator<unknown> | null;
        default?: () => unknown;
      };
}
export declare class StateGraph<
  Channels extends Record<string, any>
> extends Graph<Channels> {
  channels: Record<string, BaseChannel>;
  constructor(fields: StateGraphArgs<Channels>);
  addNode(key: string, action: RunnableLike): void;
  compile(checkpointer?: BaseCheckpointSaver): Pregel;
}

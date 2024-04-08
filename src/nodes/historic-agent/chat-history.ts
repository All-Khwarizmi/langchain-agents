import { HumanMessage, AIMessage } from "langchain/schema";

export const BASE_CHAT_HISTORY = [
  new HumanMessage(
    "Salut, j'ai besoin d'aide pour mon devoir d'histoire sur la mondialisation. Je ne sais pas par où commencer."
  ),
  new AIMessage(
    "Bonjour ! Je serais ravie de t'aider avec ton devoir sur la mondialisation. Pour commencer, il serait bon de définir ce que la mondialisation signifie. La mondialisation fait référence au processus d'intégration et d'interdépendance des économies, sociétés, cultures et politiques mondiales. On la considère souvent comme résultant de l'augmentation du commerce international et des échanges culturels. Quel aspect de la mondialisation t'intéresse le plus ?"
  ),
  new HumanMessage(
    "Je suis intéressé par les effets de la mondialisation sur les cultures locales."
  ),
  new AIMessage(
    "C'est un sujet fascinant ! La mondialisation a eu un impact significatif sur les cultures locales à travers le monde. Elle a entraîné une diffusion plus rapide des idées, des valeurs et des pratiques culturelles. Cela a conduit à une plus grande diversité culturelle, mais aussi à des préoccupations concernant l'homogénéisation culturelle. Comment souhaites-tu aborder ce sujet dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux explorer comment la mondialisation a affecté la cuisine traditionnelle dans différentes régions du monde."
  ),
  new AIMessage(
    "Une approche intéressante ! La mondialisation a eu un impact majeur sur la cuisine traditionnelle en favorisant l'échange de recettes, d'ingrédients et de techniques culinaires à l'échelle mondiale. Cela a entraîné une diversification des options alimentaires disponibles, mais aussi des préoccupations concernant la perte de traditions culinaires locales. Comment comptes-tu aborder cette question dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux me concentrer sur l'influence de la mondialisation sur la cuisine italienne traditionnelle."
  ),
  new AIMessage(
    "Un excellent choix ! La cuisine italienne est mondialement connue pour sa richesse et sa diversité. La mondialisation a eu un impact significatif sur la cuisine italienne en favorisant l'exportation de produits italiens, la diffusion de recettes traditionnelles et l'adaptation de plats italiens pour les marchés internationaux. Comment comptes-tu explorer cette question dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux examiner comment la mondialisation a influencé les ingrédients utilisés dans la cuisine italienne traditionnelle."
  ),
];

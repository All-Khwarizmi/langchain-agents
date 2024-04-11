# Chroma Vector Database

When it comes to LLM applications I like database to run locally on my machine. I used HNSW to be able to store indexes in file. Chroma is quite similar and allows to run an instance locally on your machine or a Docker container. Mostofall you can expand the index by adding more vectors to it, which is quite useful when you want to work with embbedings back and forth.

## Setup
[Get Started Docs](https://docs.trychroma.com/getting-started)


### Install Chroma
You have to install chroma and the python to run the server and cli. You can do it with pip:

```bash
pnpm add chroma
```

```bash
pip install chroma
```

## Run the server

```bash
chroma run --path /db_path
```

## Usage

Refer to the documentation for more information on how to use the API.
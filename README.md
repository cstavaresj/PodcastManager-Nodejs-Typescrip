# Podcast Manager

## Descrição
Podcast Manager é um backend desenvolvido em Node.js com TypeScript para gerenciar e centralizar diferentes episódios de podcasts em vídeo, organizados por categorias.

Este projeto foi desenvolvido seguindo as aulas do Expert **Felipe Aguiar** da [DIO](https://www.dio.me).  
O projeto original pode ser encontrado no GitHub: [node-ts-webapi-without-frameworks-podcast-menager](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager).

## Domínio
O projeto foca exclusivamente em podcasts feitos em vídeo, permitindo a organização e filtragem dos episódios com base em categorias e nomes de podcasts.

## Features
- Listar episódios de podcasts organizados por categorias
    - Exemplo de categorias: [Saúde, Fitness, Mentalidade, Humor]
- Filtrar episódios pelo nome do podcast

## Como funciona
O backend disponibiliza dois endpoints principais para acesso aos episódios de podcasts.

### Listar todos os episódios por categoria
**Rota:** `GET /api/list`

**Resposta:**
```json
[
    {
        "podcastName": "flow",
        "episode": "JAIR BOLSONARO - Flow #426",
        "videoId": "WykOxY55yw0",
        "cover": "https://i.ytimg.com/vi/WykOxY55yw0/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=WykOxY55yw0",
        "categoria": ["politica", "melhores"]
    },
    {
        "podcastName": "flow",
        "episode": "RAFINHA BASTOS - Flow #421",
        "videoId": "41WkNbV_-9s",
        "cover": "https://i.ytimg.com/vi/41WkNbV_-9s/maxresdefault.jpg",
        "link": "https://youtu.be/41WkNbV_-9s",
        "categoria": ["humor", "melhores"]
    }
]
```

### Filtrar episódios por nome do podcast
**Rota:** `GET /api/episode?p={nome_do_podcast}`

**Exemplo de uso:**
```
GET http://localhost:3333/api/episode?p=flow
```

## Estrutura do Código
O backend utiliza um servidor HTTP simples em Node.js com TypeScript. O controle das requisições é realizado pelo arquivo principal:

```typescript
import * as http from 'http';
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};
```

## Tecnologias Utilizadas
- **Node.js**
- **TypeScript**

## Como Executar o Projeto
### 1. Clone o repositório:
```sh
git clone https://github.com/seu-usuario/podcast-manager.git
cd podcast-manager
```

### 2. Instale as dependências:
```sh
npm install
```

### 3. Inicie o servidor:
```sh
npm run watch
```

O backend estará rodando em `http://localhost:3333`.

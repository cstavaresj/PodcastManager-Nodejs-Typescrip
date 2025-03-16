# Podcast Menager

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como
### Features
Listar os episódios de podcasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de episódios

response:
```js
[
    {
        podcastName: "flow",
        episode: "JAIR BOLSONARO - Flow #426",
        videoId: "WykOxY55yw0",
        cover: "https://i.ytimg.com/vi/WykOxY55yw0/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=WykOxY55yw0",
        categoria: ["politica", "melhores"],
    },
    {
        podcastName: "flow",
        episode: "RAFINHA BASTOS - Flow #421",
        videoId: "41WkNbV_-9s",
        cover: "https://i.ytimg.com/vi/41WkNbV_-9s/maxresdefault.jpg",
        link: "https://youtu.be/41WkNbV_-9s",
        categoria: ["humor", "melhores"],
    }
]
```

GET: retorna os episódios de podcasts baseado em um parâmetro enviado pelo cliente do nome do podcast
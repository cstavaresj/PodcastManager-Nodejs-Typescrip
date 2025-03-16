import * as http from 'http';
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller"; //Importa o controlador responsavel pelas requisições e respostas
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //Texto para consulta QuerryString
    //Exemplo: http://localhost:3333/api/episode?p=flow
    const baseUrl = request.url?.split("?") [0];

    //Listar podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){ //Se a requisição for um get e vir da rota list então retorna a função
        await getListEpisodes(request, response);
    }

     //Filtra episódio
     if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){ //Se a requisição for um get e vier da rota episode então retorna a função
        await getFilterEpisodes(request, response);
    }
}
//Este é o controlador, o porteiro de tudo que vai entrar ou sair

import { IncomingMessage, Server, ServerResponse } from "http"; //importa o request e response
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-types";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { serviceListEpisodes } from "../services/List-episodes-service";

const DEFAULT_CONTENT = {"Content-Type": ContentType.JSON};

//Função que retorna o nome dos podcasts
export const getListEpisodes = async(
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: FilterPodcastModel = await serviceListEpisodes() //Crie um content que será a resposta do processamento da função ListEpisodes lá do serviço
    
    response.writeHead(content.statusCode, DEFAULT_CONTENT); //Escreve no cabeçalho da requisição que o conteúdo será um json.
    response.write(JSON.stringify(content.body)) //Json que converte o resultado content em texto para ser legível no navegador por exemplo
    
    response.end();
};

//Função que filtra os episódios
export const getFilterEpisodes = async(
    request: IncomingMessage,
    response: ServerResponse
) => {

    
    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, DEFAULT_CONTENT); 
    response.write(JSON.stringify(content.body))
    
    response.end();
}
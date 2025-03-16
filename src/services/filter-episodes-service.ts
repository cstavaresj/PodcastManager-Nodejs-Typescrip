import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {
    
    //Define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],

    };

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || ""; //Vai quebrar a a url e separar em um vetor com posição 0 http://localhost:3333/api/episode?p= e posição 1 flow, mas o que importa é apenas a posição 1 com o nome do podcast que será filtrado
    const data = await repositoryPodcast(queryString);
    
    //verifica se tem conteúdo
    if (data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;

    return responseFormat
}
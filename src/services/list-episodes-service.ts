//Service é responsável por retornar os dados processados para o Controlador

import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"; //importa a função repositoryPodcast
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async():Promise<FilterPodcastModel> =>{

    let responseFormat: FilterPodcastModel = {
            statusCode: 0,
            body: [],
    
        };      
            
    const data = await repositoryPodcast();      
    
    //verifica se tem conteúdo
    if (data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;

    return responseFormat;
}
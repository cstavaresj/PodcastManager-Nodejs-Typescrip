import fs from "fs" //importa o File System que lê e escreve arquivos do sistema
import path from "path" //Importa o Pach que consegue ler diretórios do sistema
import { PodcastModel } from "../models/podcast-model"; //Importa o modelo de interface da pasta models

const pathData = path.join(__dirname, "../repositories/podcasts.json"); //lê o caminho do arquivo json, __dirname é para o caminho servir em qualquer máquina que o projeto esteja

export const repositoryPodcast = async (
    podcastName?:string //o ? torna o podcast opcional, ou seja, é um parâmetro que pode ter ou não
): Promise<PodcastModel[]> =>{ //Vai retornar um vetor no padrão da interface Podcast criada na pasta models
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language); //lê o arquico json no caminho pathData no padrão de linguagem utf-8
    let jsonFile = JSON.parse(rawData); //lê o texto tipo string e converte para json
    
    if (podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName) //Lê no modelo de podcast definido no models e filtra por nome quem tiver o nome igual ao podcastName 
    }
    
    return jsonFile;
}
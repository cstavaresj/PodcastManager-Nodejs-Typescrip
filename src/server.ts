//Esse é o arquivo que cria e inicia o servidor

import * as http from 'http'; //Importa as dependencias htpp que já tem integrado no nodejs
import { app } from './app';


//Cria um servidor. Tudo que entra é pelo request e tudo que sai é pelo response
const server = http.createServer(app);

//Constante da porta que está sendo usada, a porta está no arquivo .env caso seja necessário alterar
const port = process.env.PORT

//Inicia o servidor da porta configurada
server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`); //Apenas uma mensagem para mostrar que o servidor foi iniciado corretamente
});
/*
O que é NPM?
É o gerenciador de pacotes do NODE permitindo a busca, instalação, gerenciamento, criação e publicação de pacotes.

LINKS IMPORTANTES
https://nodejs.org/en/docs/guides/
https://devdocs.io/haxe~php/
https://devdocs.io/haxe~php/nativearray
https://stackoverflow.com/
https://roadmap.sh/andrhttps://roadmap.sh/androidoid
https://www.devmedia.com.br/guia/linguagem-csharp/38152


COMPONENTES NPM
website
	Busca e análise de pacotes
cli
	Comandos de terminal, mais utilizado
registry	
	Local onde ficam armazenados os pacotes.
	registry.npmjs.org
	armazenar todos os pacotes disponíveis no NPM
	acesso: através do NPM CLI


PRÁTICA DE NPM
    Arquitetura

    Instalar e Configurar npm Init
    npm i query-string

DOCUMENTAÇÕES DE REFERÊNCIA NPM

npmjs.com
devdocs.io/npm
stackoverflow.com


*/

//Incluindo uma Biblioteca 
//(Pacote HTTP)
const http = require('http');
// (Pacote URL)
const url = require('url');
// Pacote queryString
const queryString = require('query-string');

//Definição de Endereço URL
const hostname = '127.0.0.1';

const port = 3000;

// Implementação da Regra de Negócio
const server = http.createServer((req, res)=>{

    // Pegar a Pergunta na URL
    //console.log(req.url);
    const params = queryString.parse (url.parse(req.url, true).search);
    //console.log(params);   
    // Verificar a Pergunta e Escolher uma Resposta
    let resposta;
    if(params.pergunta == 'melhor-filme'){
        //console.log('Star Wars');
        resposta = 'Star Wars';
    }
    else if(params.pergunta == 'melhor-tecnologia-backend'){
        //console.log('NodeJS');
        resposta = 'NodeJS';
    }
    else{
        //console.log('Não Sei! Desculpe! =(');
        resposta='Não Sei! Desculpe :\'(';
    }
    // Retornar a resposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World Leia');
    res.end(resposta);
});
//Execução
server.listen(port, hostname,()=>{
    console.log(`Server runing at http://${hostname}:${port}`);
});
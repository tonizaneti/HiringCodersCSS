/*
PRÁTICA DE JAVASCRIPT
Minuto: 44:49
*/

//Incluindo uma Biblioteca 
//(Pacote HTTP)
const http = require('http');
// (Pacote URL)
const url = require('url');
fs=require('fs');
// Pacote queryString
const queryString = require('query-string');

//Definição de Endereço URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da Regra de Negócio
const server = http.createServer((req, res)=>{
    let resposta;
    const urlparse = url.parse(req.url, true);

    //Receber as Informações do Usuário
    const params = queryString.parse(urlparse.search);
    // Criar um usuário || Atualizar um Usuário
    if(urlparse.pathname=='/criar-usuario'){
        // Salvar As Informações
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function(err){
            if(err) throw err;
                console.log('Saved!');
        });
        resposta = 'Usuario Criado com Sucesso';
    }    
    else if(urlparse.pathname=='/selecionar-usuario'){
        params.id
    }
    // Selecionar Usuário
    // Remover o Usuário

    //localhost:3000/?nome=ToniZaneti&idade=40&id=1



    // Retornar a resposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello World');
    res.end(resposta);
});
//Execução
server.listen(port, hostname,()=>{
    console.log(`Server runing at http://${hostname}:${port}/`);
});
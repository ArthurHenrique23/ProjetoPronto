// importando o express
import express from "express"

// importando os produtos do banco de dados
import { produto } from "./database/Produto.js"

// declarando a rota
const rotas = express.Router()

// definindo rota get /produto
rotas.get("/produtos", async function(requisicao, resposta) { 

    // tentando obter produtos do banco de dados
    try { 
        const resultados = await produto.find()
        if ( resultados.length > 0 ) 
            resposta.status(200).json(resultados) 
        else
            resposta.sendStatus(404) 
    } 

    // caso falhe
    catch(erro) { 
        console.log(erro.message) 
        resposta.sendStatus(500)
    }    

}) 

// definindo rota get /produto/:codigo
rotas.get("/produto/:codigo", async function(requisicao, resposta) { 

    // obtendo codigo do endereco
    const { codigo } = requisicao.params

    // tentando obter produto com o codigo no banco de dados
    try { 
        const resultados = await produto.findOne({ codigo: codigo })
        if ( Object.keys(resultados).length > 0 ) 
            resposta.status(200).json(resultados) 
        else
            resposta.sendStatus(404) 
    } 

    // case falhe
    catch(erro) { 
        console.log(erro.message) 
        resposta.sendStatus(500)
    }

}) 

// definindo rota get /promocao
rotas.get("/promocao", async function(requisicao, resposta) { 

    // tentando obter produtos com promocao do banco de dados
    try { 
        const resultados = await produto.find({ promocao: true })
        if ( resultados.length > 0 ) 
            resposta.status(200).json(resultados) 
        else
            resposta.sendStatus(404) 
    } 

    // caso falhe
    catch(erro) { 
        console.log(erro.message) 
        resposta.sendStatus(404)
    }        

}) 

// definindo rota post /catalogar
rotas.post("/catalogar", async function(requisicao, resposta) { 

    // tentando salvar produto no banco de dados
    try { 
        const novoProduto = new produto({ 
            codigo: requisicao.body.codigo,
            marca: requisicao.body.marca,
            modelo: requisicao.body.modelo,
            preco: parseInt(requisicao.body.preco),
            descricao: requisicao.body.descricao,
            imagens: requisicao.body.imagens,
            promocao: requisicao.body.promocao
        })
        const resultado = await novoProduto.save()
        resposta.status(201).json(resultado) 
    } 

    // caso falhe
    catch(erro) { 
        console.log(erro.message) 
        resposta.sendStatus(500)
    }    
    
}) 

// definindo uma rota nao encontrada
rotas.get("*", function(requisicao, resposta) { 

    // enviando resposta 404
    resposta.sendStatus(404)

}) 

// exportando a rota
export default rotas
// importando o mongoose e o dotenv
import mongoose from "mongoose"
import "dotenv/config"

// obtendo o endereco do arquivo env
const endereco = process.env.MONGO_URI 

// configurando a conexao
const configuracao = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}

// definindo a conexao
mongoose.connect(endereco, configuracao, function() { 

    console.log("CONECTADO COM O BANCO DE DADOS!")
 
})

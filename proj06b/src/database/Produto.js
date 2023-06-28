// importando o mongoose
import mongoose from "mongoose" 

// criando um esquema de dados
const EsquemaProduto = new mongoose.Schema({ 
    codigo: String, 
    marca: String, 
    modelo: String, 
    preco: Number,
    descricao: String, 
    imagens: [String], 
    promocao: Boolean 
},
{ 
    versionKey: false 
}) 

// criando um modelo
const produto = mongoose.model("produto", EsquemaProduto)

// exportando o modelo
export { produto }

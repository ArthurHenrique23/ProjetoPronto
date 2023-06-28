import React, { useState, useEffect } from "react";

import Navegacao from "../components/Navegacao";
import Principal from "../components/Principal";
//import ProdutosExemplo from "../datas/ProdutosExemplo.js";
import { ObterProdutos } from "../functions/RequisicaoServidor.js";

export default function Vitrine() {
    const [ produtos, definirProdutos] = useState([])
   
    useEffect(function() {
        ObterProdutos()
            .then(function(resposta) {
                if(resposta.status === 200)
                    definirProdutos(resposta.data)
            })
            .catch(function(erro) {
                console.log(erro)
            })
    }, [])

    return <>
        <Navegacao titulo="VITRINE">
            <a href="/">Início</a>
            <a href="/promocao">Promoção</a>
            <a href="/carrinho">Carrinho</a>
        </Navegacao>

        { produtos.length > 0 &&
        
            <Principal produtos={ produtos } />
        }
    </>
}
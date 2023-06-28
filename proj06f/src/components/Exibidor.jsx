import React from "react";
import styles from './Exibidor.module.css'
import SalvarCarrinho from "../functions/SalvarCarrinho";

export default function Exibidor(props) {
    return Object.keys(props.produto).length > 0 ?
    <div className={styles.modelo}>
        <div className={styles.imagens}>
            <img
                src={props.produto.imagens[0]}
                alt="Foto do produto"
                height={450} />
            <img
                src={props.produto.imagens[1]}
                alt="Foto do produto"
                height={450} />
            <img
                src={props.produto.imagens[2]}
                alt="Foto do produto"
                height={450} />
        </div>
        <div className={styles.dados}>
            <div>{ props.produto.marca}</div>
            <div>{ props.produto.modelo}</div>
            <div>{ props.produto.preco}</div>
            <div>{ props.produto.descricao}</div>
            <button onClick={() => SalvarCarrinho(props.produto
                .codigo)}>Adicionar ao Carrinho</button>
        </div>
    </div>
    :
    <div className={styles.modelo}>
        <div className={styles.dados}>
            Produto não encontrado!
        </div>
    </div>
}
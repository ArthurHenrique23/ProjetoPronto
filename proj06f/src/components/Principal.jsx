import React from "react";
import styles from "./Principal.module.css"

export default function Principal(props) {
    return <div className={styles.modelo}>
        {
            props.produtos.map(function(produto, indice) {
                return <div className={styles.produto}>
                <a href={"/produto/" + produto.codigo}>
                    <img className={styles.imagem} src={ produto.imagens[0]} alt="Foto do produto" />
                    <div className={styles.dados}>
                        <div>{ produto.modelo }</div>
                        <div> R$ {produto.preco },00</div>
                    </div>
                </a>
            </div>
            })  
        }
    </div>
}
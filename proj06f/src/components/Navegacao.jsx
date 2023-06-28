import React from "react";
import styles from "./Navegacao.module.css";

export default function Navegacao(props) {
    return <div className={styles.modelo}>
        <div className={styles.titulo}>{ props.titulo }</div>
        <div className={styles.botoes}>{ props.children }</div>
    </div>
}
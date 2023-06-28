import React from "react";
import styles from './Janela.module.css'

export default function Janela(props) {
    return <div className={styles.modelo}>
        { props.children}
    </div>
}
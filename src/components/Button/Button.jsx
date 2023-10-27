import React from "react";
import styles from 'styles.module.css';

export default function Button({onClick}){
        return(
        <button 
        className={styles.Button}
        onClick={onClick}>LoadMore</button>
    )
};
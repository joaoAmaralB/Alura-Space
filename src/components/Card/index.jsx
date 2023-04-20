import React from 'react'
import like from './favorito.png'
import open from './open.png'

function Card({ id, imagem, titulo, creditos, styles }) {
    return (
        <li key={id} className={styles.galeria__card}>
            <img className={styles.galeria__imagem} src={imagem} alt={titulo} />
            <p className={styles.galeria__descricao}>{titulo}</p>
            <div>
                <p>{creditos}</p>
                <span>
                    <img src={like} alt="Ícone de like" />
                    <img src={open} alt="Ícone de abrir" />
                </span>
            </div>
        </li>
    )
}

export default Card
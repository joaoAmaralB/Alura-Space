import React from 'react'
import fotosPopulares from './populares.json'
import styles from './Populares.module.scss'
import Botao from 'components/Botao'

function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map(foto => {
                return (
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )
            })}
        </ul>
        <Botao>Ver mais</Botao>
    </aside>
  )
}

export default Populares
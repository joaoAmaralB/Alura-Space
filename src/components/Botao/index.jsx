import React from 'react'
import styles from './Botao.module.scss'

function Botao({ children }) {
  return (
    <button className={styles.botao}>{children}</button>
  )
}

export default Botao
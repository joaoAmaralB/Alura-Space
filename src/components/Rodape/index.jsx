import React from 'react'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './rodape.module.scss'

function Rodape() {
  return (
    <footer className={styles.rodape}>
        <ul className={styles.rodape__links}>
            <li className={styles.rodape__item}>
                <a href="/">
                    <img src={facebook} alt="Link para o facebook da Alura Space" />
                </a>
            </li>
            <li className={styles.rodape__item}>
                <a href="/">
                    <img src={twitter} alt="Link para o twitter da Alura Space" />
                </a>
            </li>
            <li className={styles.rodape__item}>
                <a href="/">
                    <img src={instagram} alt="Link para o instagram da Alura Space" />
                </a>
            </li>
        </ul>
        <h2>Desenvolvido por Alura.</h2>
    </footer>
  )
}

export default Rodape
import React from 'react'
import icones from './icones.json'
import styles from './menu.module.scss'

function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {icones.map(icone => {
                return (
                    <li key={icone.id} className={styles.menu__item}>
                        <img src={icone.path} alt={icone.alt} />
                        <a href='/'>{icone.link}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Menu
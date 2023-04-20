import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Card from '../Card'

function Galeria() {
    const [itens, setItens] = useState(fotos)

    const tags = [...new Set(fotos.map(foto => { return foto.tag}))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter(foto => {
            return foto.tag === tag
        })

        setItens(novasFotos)
    }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} fotos={fotos}/>
        <ul className={styles.galeria__cards}>
            {itens.map(foto => {
                return(
                    <Card 
                        id={foto.id}
                        imagem={foto.imagem}
                        titulo={foto.titulo} 
                        creditos={foto.creditos}
                        styles={styles}
                    />    
                )
            })}
        </ul>
    </section>
  )
}

export default Galeria
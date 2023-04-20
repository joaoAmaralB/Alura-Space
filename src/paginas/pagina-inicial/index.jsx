import Banner from "components/Banner"
import Cabecalho from "components/Cabecalho"
import Galeria from "components/Galeria"
import Menu from "components/Menu"
import Populares from "components/Populares"
import Rodape from "components/Rodape"
import styles from './PaginaInicial.module.scss'

function PaginaInicial() {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <section className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </section>
            </main>
            <Rodape/>
        </>
    )
}

export default PaginaInicial
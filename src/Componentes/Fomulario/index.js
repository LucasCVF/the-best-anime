import CampoTexto from '../CampoTexto'
import './Formulario.css'
function Formulario () {
    return (
        <section className='formulario'>
            <form>
                <CampoTexto label="Nome" placeholder=" Digite seu nome" />
                <CampoTexto label="Anime 1°" placeholder=" Digite seu anime preferido" />
                <CampoTexto label="Anime 2°" placeholder=" Digite seu segundo anime preferido" />
                <CampoTexto label="Anime 3°" placeholder=" Digite terceiro anime preferido" />
            </form>
        </section>
    )
}

export default Formulario
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


function Formulario(props) {

    const [nome, setNome] = useState('')
    const [anime1, setAnime1] = useState('')
    const [anime2, setAnime2] = useState('')
    const [anime3, setAnime3] = useState('')

    function aoSalvar(evento) {
        evento.preventDefault()
        props.aoCadastrado({nome, anime1, anime2, anime3})
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome} 
                    aoAlterado={nome => setNome(nome)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Anime 1°" 
                    placeholder="Digite seu anime preferido"
                    valor={anime1} 
                    aoAlterado={anime1 => setAnime1(anime1)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Anime 2°" 
                    placeholder="Digite seu segundo anime preferido" 
                    valor={anime2} 
                    aoAlterado={anime2 => setAnime2(anime2)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Anime 3°" 
                    placeholder="Digite seu terceiro anime preferido"
                    valor={anime3} 
                    aoAlterado={anime3 => setAnime3(anime3)} 
                />
                <Botao />   
            </form>
        </section>
    )
}

export default Formulario
import './ExibirDados.css'

function ExibirDados (props) {

    return(
        props.cadastro.map((cadastro, index) => (
            <div key={index}>
                <p><strong>Nome:</strong> {cadastro.nome}</p>
                <p><strong>Anime 1:</strong> {cadastro.anime1}</p>
                <p><strong>Anime 2:</strong> {cadastro.anime2}</p>
                <p><strong>Anime 3:</strong> {cadastro.anime3}</p>
                <hr></hr>
            </div>
        ))
    )
}

export default ExibirDados;
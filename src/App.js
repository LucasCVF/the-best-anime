import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Descricao from './Componentes/Descricao';
import Formulario from './Componentes/Fomulario';
import ExibirDados from './Componentes/ExibirDados';

function App() {

  const [cadastrados, setCadastrados] = useState([])

  function NovoCadastrado(novoCadastro) {
    setCadastrados((cadastrosAnteriores) => [...cadastrosAnteriores, novoCadastro])
  }

  return (
    <div className="App">
      <Banner />
      <Descricao />
      <Formulario aoCadastrado={cadastrado => NovoCadastrado(cadastrado)} />
      {/* Passando o estado de cadastrados para o componente ExibirDados */}
      <ExibirDados cadastro={cadastrados} />
    </div>
  );
}

export default App;

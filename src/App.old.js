import './App.css';
import TextoColorido from './components/TextoColorido';
import Botao from './components/Botao';
import { useState } from 'react';

function App() {

  let [contador, setContador] = useState(0);
  let [ativo, setAtivo] = useState(false);

  const handleBotaoAdicionar = () => {
    setContador(++contador);
  } 
  
  const handleBotaoMudar = () => {
    setAtivo(!ativo);
  }

  return (
    <>
     {/* && significa se é igual a true, se for executa a condição na frente */}
    { ativo && <TextoColorido cor = 'green'>Sinal Aberto</TextoColorido>}
    { !ativo && <TextoColorido cor = 'red'>Sinal Fechado</TextoColorido>}

    { ativo
    ? <TextoColorido cor = 'green'>Sinal Aberto</TextoColorido>
    : <TextoColorido cor = 'red'>Sinal Fechado</TextoColorido>
    }
    
    <Botao value='Adicionar' onClick={handleBotaoAdicionar}/>
    <Botao value='Mudar' onClick={handleBotaoMudar}/>

    <p> { contador }</p>
    </>
  );
}

export default App;

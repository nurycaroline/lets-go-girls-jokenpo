import pedra from './assets/pedra.png'
import tesoura from './assets/tesoura.png'
import papel from './assets/papel.png'
import pessoa from './assets/pessoa.png'
import robo from './assets/robo.png'

import "./style.css"

function App() {
  return (
    <div className="App">
      <div className="tabuleiro">
        <h1 className="titulo">Pedra Papel Tesoura</h1>

        <p className="texto-escolha">Escolha a sua jogada</p>

        <div className="opcoes">
          <img src={ pedra } alt="pedra" />
          <img src={ papel } alt="papel" />
          <img src={ tesoura } alt="tesoura" />
        </div>

        <div className="jogadores">
          <div className="pessoa">
            <p>Voce:</p>
            <p>0</p>
            <img src={ pessoa } alt="voce" />
          </div>
          <div className="robo">
            <p>Computador:</p>
            <p>0</p>
            <img src={ robo } alt="computador" />
          </div>
        </div>
      </div>

      <button className="botao-reiniciar">reiniciar</button>

    </div>
  );
}

export default App;

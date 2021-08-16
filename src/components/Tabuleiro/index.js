import "./styles.css"

import Opcoes from '../Opcoes'
import Jogadores from '../Jogadores'
import Botao from "../Botao";

function Tabuleiro() {
	return (
		<>
			<div className="tabuleiro">
				<h1 className="titulo">Pedra Papel Tesoura</h1>
				<p className="texto-escolha">Escolha a sua jogada</p>

				<Opcoes />
				<Jogadores />
			</div>

			<Botao>reiniciar</Botao>
		</>
	);
}

export default Tabuleiro;
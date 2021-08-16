import { useEffect, useState } from 'react'

import "./styles.css"

import Opcoes from '../Opcoes'
import Jogadores from '../Jogadores'
import Botao from "../Botao";

function Tabuleiro() {
	const [opcaoSelecionada, setOpcaoSelecionada] = useState('')
	const [meusPontos, setMeusPontos] = useState(0)
	const [roboPontos, setRoboPontos] = useState(0)

	const opcoes = ['pedra', 'papel', 'tesoura']
	
	useEffect(() => {
		if (opcaoSelecionada) {
			const numeroAleatorio = Math.floor(Math.random() * opcoes.length)
			const escolhaRobo = opcoes[numeroAleatorio]
	
			alert(`Voce: ${opcaoSelecionada}, Robo: ${escolhaRobo}`)
	
			if (escolhaRobo === opcaoSelecionada) {
				alert('Empate')
			} else if (escolhaRobo === "papel" && opcaoSelecionada === 'pedra') {
				setRoboPontos(roboPontos + 1)
			} else if (escolhaRobo === "tesoura" && opcaoSelecionada === 'papel') {
				setRoboPontos(roboPontos + 1)
			} else if (escolhaRobo === "pedra" && opcaoSelecionada === 'tesoura') {
				setRoboPontos(roboPontos + 1)
			} else {
				setMeusPontos(meusPontos + 1)
				setOpcaoSelecionada('')
			}
		}

	}, [opcaoSelecionada])

	function reiniciar() {
		setMeusPontos(0)
		setRoboPontos(0)
	}

	return (
		<>
			<div className="tabuleiro">
				<h1 className="titulo">Pedra Papel Tesoura</h1>
				<p className="texto-escolha">Escolha a sua jogada</p>

				<Opcoes selecionar={setOpcaoSelecionada} />
				

				<Jogadores voce={meusPontos} robo={roboPontos} />
			</div>

			<Botao onClick={ reiniciar }>reiniciar</Botao>
		</>
	);
}

export default Tabuleiro;
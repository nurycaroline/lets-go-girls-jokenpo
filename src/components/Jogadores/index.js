import './styles.css';

import pessoaImagem from '../../assets/pessoa.png'
import roboImagem from '../../assets/robo.png'

function Jogadores({ voce, robo }) {
	return (
		<div className="jogadores">
			<div className="pessoa">
				<p>Voce:</p>
				<p>{voce}</p>
				<img src={ pessoaImagem } alt="voce" />
			</div>
			<div className="robo">
				<p>Computador:</p>
				<p>{ robo }</p>
				<img src={ roboImagem } alt="computador" />
			</div>
		</div>
	);
}

export default Jogadores;
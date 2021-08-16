import pedra from '../../assets/pedra.png'
import tesoura from '../../assets/tesoura.png'
import papel from '../../assets/papel.png'

import './styles.css';

function Opcoes({ selecionar }) {
	return (
		<div className="opcoes">
			<img src={ pedra } alt="pedra" onClick={() => selecionar("pedra")} />
			<img src={ papel } alt="papel" onClick={() => selecionar("papel")} />
			<img src={ tesoura } alt="tesoura" onClick={() => selecionar("tesoura")} />
		</div>
	);
}

export default Opcoes;
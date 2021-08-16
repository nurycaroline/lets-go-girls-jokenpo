import pedra from '../../assets/pedra.png'
import tesoura from '../../assets/tesoura.png'
import papel from '../../assets/papel.png'

import './styles.css';

function Opcoes() {
	return (
		<div className="opcoes">
			<img src={ pedra } alt="pedra" />
			<img src={ papel } alt="papel" />
			<img src={ tesoura } alt="tesoura" />
		</div>
	);
}

export default Opcoes;
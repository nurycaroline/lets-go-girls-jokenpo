import './styles.css';

import pessoa from '../../assets/pessoa.png'
import robo from '../../assets/robo.png'

function Jogadores() {
	return (
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
	);
}

export default Jogadores;
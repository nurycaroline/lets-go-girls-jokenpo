import './style.css';

function Botao({ children, ...rest }) {
	return <button className="botao" {...rest}>{ children }</button>;
}

export default Botao;
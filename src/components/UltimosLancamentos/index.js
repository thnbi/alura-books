import { livros } from "./data.js";
import { Titulo } from "../Titulo/index.js";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda/index.js";
import livroAngular from "../../img/livro2.png";

const UltimosLancamentosContainer = styled.section`
	background-color: #ebecee;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
	margin-top: 30px;
	display: flex;
	width: 100%;
	justify-content: center;
	cursor: pointer;
`;

function UltimosLancamentos() {
	return (
		<UltimosLancamentosContainer>
			<Titulo cor="#EB9B00" fontSize="36px" textAlign="center">
				Últimos Lançamentos
			</Titulo>
			<NovosLivrosContainer>
				{livros.map((livro) => (
					<img src={livro.src} alt={livro.nome} />
				))}
			</NovosLivrosContainer>
			<CardRecomenda
				titulo="Talvez você se interesse por..."
				subtitulo="Angular 15"
				descricao="Construindo uma aplicação com a plataforma Google"
				img={livroAngular}
			/>
		</UltimosLancamentosContainer>
	);
}

export default UltimosLancamentos;

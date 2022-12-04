import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";
import styled from "styled-components";

const AppContainer = styled.div`
	width: 100vw;
	height: 100%;
	background-image: linear-gradient(90deg, #002f52 35%, #326589);
	background-repeat: no-repeat;
`;

function App() {
	return (
		<AppContainer>
			<Header />
			<Pesquisa />
			<UltimosLancamentos />
		</AppContainer>
	);
}

export default App;

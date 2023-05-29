import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import dados from "./DATASOURCE.json";

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<h1>Portfólio</h1>
				<div className="cards-div">
					{dados.map((element, index) => {
						return <Card dados={element} />;
					})}
				</div>
			</header>
		</div>
	);
}

export default App;

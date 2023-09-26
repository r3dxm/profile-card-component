import ProfileCard from "./components/ProfileCard";
import "./App.css";
import BackgroundTop from "./images/bg-pattern-top.svg";
import BackgroundBottom from "./images/bg-pattern-bottom.svg";

function App() {
	return (
		<div className="App">
			<div className="background">
				<img className="background-top" src={BackgroundTop} />
				<img className="background-bottom" src={BackgroundBottom} />
			</div>
			<ProfileCard />
		</div>
	);
}

export default App;

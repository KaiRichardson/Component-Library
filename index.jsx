import ReactDOM from "react-dom/client";
import Badges from "./src/app/components/Badges";

function App() {
	return (
		<>
			<Badges />
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

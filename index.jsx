import ReactDOM from "react-dom/client";
import Badges from "./src/app/components/Badges";
import Banners from "./src/app/components/Banners";

function App() {
	return (
		<>
			<Badges />
			<hr />
			<Banners />
			<hr />
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

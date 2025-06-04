import ReactDOM from "react-dom/client";
import Badges from "./src/app/components/Badges";
import Banners from "./src/app/components/Banners";
import Cards from "./src/app/components/Cards";
import Testimonials from "./src/app/components/Testimonials";

function App() {
	return (
		<>
			<Badges />
			<br />
			<hr />
			<Banners />
			<br />
			<hr />
			<Cards />
			<br />
			<hr />
			<Testimonials />
			<br />
			<hr />
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";

import Index from "./screens";
import About from "./screens/about/about";

const App = () => {
	return (
		<BrowserRouter>
			<Header></Header>

			<Route path="/" exact component={Index}></Route>
			<Route path="/about" exact component={About}></Route>

			<Footer></Footer>
		</BrowserRouter>
	);
};

export default App;

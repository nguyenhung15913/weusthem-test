import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contacts/Contact";
import Nav from "./components/Nav/Nav";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
	const { user } = useContext(Context);

	return (
		<Router>
			<Nav />
			<Routes>
				<Route exact path="/" element={user ? <Home /> : <Login />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/contact" element={user ? <Contact /> : <Login />} />
				<Route
					path="/contact/:id"
					element={user ? <ContactDetail /> : <Login />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

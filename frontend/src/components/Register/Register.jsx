import { useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await axios.post("http://localhost:3001/api/auth/register", {
				username,
				email,
				password
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="Login">
			<h1>Register</h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label>Username</label>
					<input
						type="text"
						placeholder="Enter Your Username"
						required
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div className="form-control">
					<label>Email</label>
					<input
						type="email"
						placeholder="Enter Your Username"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-control">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter Your Password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button className="loginButton" type="submit">
					Register
				</button>

				<button className="loginRegisterButton">
					<Link className="link" to="http://localhost:3000/login">
						Login
					</Link>
				</button>
				{error && (
					<span style={{ color: "red", marginTop: "15px" }}>
						Something went wrong
					</span>
				)}
			</form>
		</div>
	);
}

export default Register;

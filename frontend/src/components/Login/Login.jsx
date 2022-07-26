import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("http://localhost:3001/api/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			console.log(res);
		} catch (err) {
			setError(true);
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};

	return (
		<div className="Login">
			<h1>Login</h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label>Username</label>
					<input
						type="text"
						placeholder="Enter Your Username"
						ref={userRef}
						required
					/>
				</div>

				<div className="form-control">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter Your Password"
						ref={passwordRef}
						required
					/>
				</div>

				<button className="loginButton" type="submit" disabled={isFetching}>
					Login
				</button>

				<button className="loginRegisterButton">
					<Link className="link" to="/register">
						Register
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

export default Login;

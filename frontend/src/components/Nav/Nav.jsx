import "./Nav.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Nav() {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="Nav">
			<Link className="logo" to="/">
				<img
					src="https://weusthem.com/wp-content/uploads/2020/04/Group-137.png"
					alt="logo"
				/>
			</Link>

			<ul>
				<li>
					<Link className="logo" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="logo" to="/contact">
						Contact
					</Link>
				</li>

				{user ? (
					<li className="topListItem" onClick={handleLogout}>
						<Link className="link" to="/">
							Logout
						</Link>
					</li>
				) : (
					<li>
						<Link className="logo" to="/login">
							Sign in
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Nav;

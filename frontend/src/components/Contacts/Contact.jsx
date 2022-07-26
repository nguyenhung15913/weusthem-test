import { useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [file, setFile] = useState(null);

	const formSubmit = async (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));

		const username = user.username;

		const contact = {
			firstName,
			lastName,
			email,
			phoneNumber,
			username
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			contact.profilePic = filename;
			try {
				await axios.post("http://localhost:3001/api/upload", data);

				const result = await axios.post(
					"http://localhost:3001/api/contacts",
					contact
				);

				window.location.replace("/contact/" + result.data._id);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="Contact">
			<form className="form" onSubmit={formSubmit}>
				<div className="form-control">
					<input
						type="file"
						id="fileInput"
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<div className="form-control">
					<label>First Name</label>
					<input
						type="text"
						name="firstName"
						placeholder="First name"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
					/>
				</div>
				<div className="form-control">
					<label>Last Name</label>
					<input
						type="text"
						name="lastName"
						placeholder="Last name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
					/>
				</div>
				<div className="form-control">
					<label>Email </label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="form-control">
					<label>Phone number</label>
					<input
						type="text"
						name="phoneNumber"
						placeholder="Phone number"
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;

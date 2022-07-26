import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ContactDetail.css";

function ContactDetail() {
	const { id } = useParams();
	const [contact, setContact] = useState({});

	const [firstName, setFirstName] = useState(contact.firstName);
	const [lastName, setLastName] = useState(contact.lastName);
	const [email, setEmail] = useState(contact.email);
	const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

	const formSubmit = async (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));

		const username = user.username;

		const updatedContact = {
			firstName,
			lastName,
			email,
			phoneNumber,
			username
		};

		try {
			const result = await axios.put(
				"http://localhost:3001/api/contacts/" + id,
				updatedContact
			);

			console.log(result);
			window.location.replace("http://localhost:3000/contact/" + id);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchContact = async () => {
		try {
			const contactDetail = await axios.get(
				"http://localhost:3001/api/contacts/" + id
			);
			setContact(contactDetail.data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchContact();
	}, []);

	return (
		<div className="contact-detail">
			<img
				className="profile-pic"
				src={`http://localhost:3001/images/${contact.profilePic}`}
				alt=""
			/>
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<td>{contact.firstName}</td>
					</tr>
					<tr>
						<th>Last Name</th>
						<td>{contact.lastName}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{contact.email}</td>
					</tr>
					<tr>
						<th>Phone Number</th>
						<td>{contact.phoneNumber}</td>
					</tr>
				</tbody>
			</table>

			<div className="Contact">
				<form className="form" onSubmit={formSubmit}>
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
					<button type="submit">Update</button>
				</form>
			</div>
		</div>
	);
}

export default ContactDetail;

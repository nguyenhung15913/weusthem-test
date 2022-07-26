import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
	const [contacts, setContacts] = useState([]);

	const [search, setSearch] = useState("");

	const handleUpdate = (id) => {
		window.location.replace("/contact/" + id);
	};

	const handleDelete = async (id) => {
		const user = JSON.parse(localStorage.getItem("user"));

		const username = user.username;
		try {
			await axios.delete("http://localhost:3001/api/contacts/" + id, {
				username: username
			});
			window.location.replace("/");
		} catch (error) {}
	};

	const fetchContacts = async () => {
		const user = JSON.parse(localStorage.getItem("user"));

		const username = user.username;

		try {
			const contactList = await axios.get(
				"http://localhost:3001/api/contacts",
				{ params: { username: username } }
			);
			setContacts(contactList.data);
		} catch (err) {
			console.log(err);
		}
	};

	const displayContact = () => {
		if (search === "") {
			return contacts.map((contact) => (
				<tr>
					<td>{contact.firstName}</td>
					<td>{contact.lastName}</td>
					<td>{contact.email}</td>
					<td>{contact.phoneNumber}</td>
					<td className="options">
						<i
							className="fa-solid fa-pen-to-square"
							onClick={() => handleUpdate(contact._id)}
						></i>
						<i
							className="fa-solid fa-trash-can"
							onClick={() => handleDelete(contact._id)}
						></i>
					</td>
				</tr>
			));
		}
		return contacts.map((contact) => {
			console.log(
				contact.firstName.toLowerCase().includes(search.toLowerCase())
			);
			if (contact.firstName.toLowerCase().includes(search.toLowerCase())) {
				return (
					<tr>
						<td>{contact.firstName}</td>
						<td>{contact.lastName}</td>
						<td>{contact.email}</td>
						<td>{contact.phoneNumber}</td>
						<td className="options">
							<i
								className="fa-solid fa-pen-to-square"
								onClick={() => handleUpdate(contact._id)}
							></i>
							<i
								className="fa-solid fa-trash-can"
								onClick={() => handleDelete(contact._id)}
							></i>
						</td>
					</tr>
				);
			} else {
				return null;
			}
		});
	};

	const sortByFirstName = () => {
		setContacts((prev) => {
			let newArray = [...prev];
			console.log(newArray);
			newArray.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));
			console.log(newArray);
			return newArray;
		});
	};

	const sortByLastName = () => {
		setContacts((prev) => {
			let newArray = [...prev];
			console.log(newArray);
			newArray.sort((a, b) => (a.lastName < b.lastName ? -1 : 1));
			console.log(newArray);
			return newArray;
		});
	};

	const sortByEmail = () => {
		setContacts((prev) => {
			let newArray = [...prev];
			console.log(newArray);
			newArray.sort((a, b) => (a.email < b.email ? -1 : 1));
			console.log(newArray);
			return newArray;
		});
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<div className="Home">
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search By First Name"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<table>
				<thead>
					<tr>
						<th className="clickable" onClick={sortByFirstName}>
							First Name
						</th>
						<th className="clickable" onClick={sortByLastName}>
							Last Name
						</th>
						<th className="clickable" onClick={sortByEmail}>
							Email
						</th>
						<th>Phone Number</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>{displayContact()}</tbody>
			</table>
		</div>
	);
}

export default Home;

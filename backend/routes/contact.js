const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.get("/", async (req, res) => {
	const username = req.query.username;

	try {
		const contacts = await Contact.find({ username });
		res.status(200).json(contacts);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	const contactId = req.params.id;

	try {
		const contact = await Contact.find({ _id: contactId });
		res.status(200).json(contact);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	const newContact = new Contact(req.body);

	try {
		const savedContact = await newContact.save();
		res.status(200).json(savedContact);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const contact = await Contact.findById(req.params.id);

		if (!contact) {
			return res.status(404).json({ message: "Cannot find contact" });
		}

		if (contact.username === req.body.username) {
			const updatedContact = await Contact.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(201).json(updatedContact);
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const contact = await Contact.findById(req.params.id);
		try {
			await contact.delete();
			res.status(200).json("contact deleted");
		} catch (e) {
			res.status(500).json(e);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

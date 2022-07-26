const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			email: req.body.email,
			username: req.body.username,
			password: hashPass
		});

		const createdUser = await newUser.save();
		res.status(201).json(createdUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });

		if (!user) {
			return res.status(400).json("Wrong username");
		}

		const validate = await bcrypt.compare(req.body.password, user.password);

		if (!validate) {
			return res.status(400).json("Wrong password");
		}

		const { password, ...others } = user._doc;

		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true
		},
		profilePic: {
			type: String,
			default: ""
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Contact", UserSchema);

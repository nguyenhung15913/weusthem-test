const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const multer = require("multer");

const path = require("path");

const contactRoute = require("./routes/contact");
const userRoute = require("./routes/user");

const app = express();

const cors = require("cors");

const PORT = 3001;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log("connected"))
	.catch((err) => console.log(err));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	}
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	res.status(200).json("File loaded");
});

app.use("/api/contacts", contactRoute);
app.use("/api/auth", userRoute);

app.listen(PORT, () => {
	console.log("listening to port 3001");
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const stateRoutes = require("./routes/stateRoutes");
const contactRoutes = require("./routes/contactRoute");
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mytravelbharat.netlify.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("TravelBharat Backend Running");
});
app.use("/api/states", stateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
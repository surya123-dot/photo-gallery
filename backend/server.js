import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const photos = [
  {
    id: 1,
    title: "Mountain",
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    title: "Beach",
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Forest",
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    title: "River",
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    title: "Desert",
    image: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    title: "Snow",
    image: "https://picsum.photos/300?random=6",
  },
  {
    id: 7,
    title: "Sunset",
    image: "https://picsum.photos/300?random=7",
  },
  {
    id: 8,
    title: "Waterfall",
    image: "https://picsum.photos/300?random=8",
  },
  {
    id: 9,
    title: "Lake",
    image: "https://picsum.photos/300?random=9",
  },
  {
    id: 10,
    title: "City",
    image: "https://picsum.photos/300?random=10",
  },
];

app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

app.get("/photos", (req, res) => {
  res.json(photos);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "surya" && password === "1234") {
    res.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    res.json({
      success: false,
      message: "Invalid Username or Password",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
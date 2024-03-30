import express from "express";
import cors from "cors";
import posts from "./data/dataitems.json" with { type: "json" }; // to import json file need to use - with {type: "json"}

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});

// app.get("/", (req, res) => {
//   console.log("Response from the server");
//   res.send("Response from the server");
// });

app.get("/getPosts", async (req, res) => {
  const allPosts = await posts.posts;
  console.log(allPosts);
  res.status(200).json({
    posts: allPosts,
    message: "Data fetched successfully"
  })
});

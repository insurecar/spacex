const express = require("express");
const app = express();
const cors = require("cors");
const queryController = require("./controllers/queryController");
const router = express.Router();

const PORT = 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

router
  .route("/api/v1")
  .get(queryController.getQuery)
  .post(queryController.visitedQuery);

router.route("/api/v1/content").get(queryController.getData);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8000`);
});

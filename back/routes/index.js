import express from "express";
import connection from "./conf";

const router = express.Router();

router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM movies ORDER BY RAND() LIMIT 4",
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO movies SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM movies WHERE id = ?", [id], err => {
    if (err) {
      res.status(500);
    } else {
      res.sendStatus(200);
    }
  });
});



connection.connect(err => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Connecté !");
  }
});

export default router;

import express from "express";
import connection from "./conf";

const router = express.Router();


router.get("/:words", (req, res) => {
  const words = req.params.words.split(' ');
  let request = '';
  words.map((item) => {
    request += `SELECT * FROM movies WHERE nom LIKE '%${item}%' UNION SELECT * FROM movies WHERE genre LIKE '%${item}%' UNION SELECT * FROM movies WHERE réalisateur LIKE '%${item}%' UNION SELECT * FROM movies WHERE année LIKE '%${item}%' UNION `;
  });
  request = request.substring(0, request.length - 7);
  connection.query(request, words ,(err, results) => {
      if (err) {
        console.log(err)
        res.sendStatus(500);
      } else {
        console.log(results)
        res.status(200).json(results);
      }
    }
  );
});
connection.connect(err => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Connecté !");
  }
});

export default router;

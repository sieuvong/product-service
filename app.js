const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let products = ["Test"];

app.use(bodyParser.json());
app.use(bodyParser.text());
app.get("/", (req, res) => res.send("Hello World!!!"));

app.post("/products", (req, res) => {
  const product = req.body;
  product && products.push(product);
  res.send();
});
app.get("/products", (req, res) => res.send({ data: products }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

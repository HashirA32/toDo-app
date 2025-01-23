let express = require("express");
let bodyParser = require("body-parser");

let data = [{ item: "Orange" }, { item: "Mango" }, { item: "Banana" }, { item: "Apple" }];

let urlencodedParser = bodyParser.urlencoded({ extended: false });

let app = express();
app.set("view engine", "ejs"); // Set EJS as the template engine

module.exports = (app) => {
  app.get("/todo", (req, res) => {
    res.render("todo", { todo: data });
  });

  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data); // Send back updated data as JSON
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(()=> {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    })
    res.json(data);
  });
};
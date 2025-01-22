let express = require("express");
let toDoController = require("./controllers/toDoController")
let app = express();

//set up template view engine

app.set("view engine", "ejs");

//static files 

app.use(express.static("./public"));

//firing Controllers

 toDoController(app);

//Port

app.listen(3000);

// let fs = require("fs");
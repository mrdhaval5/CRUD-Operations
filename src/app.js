require("dotenv").config();
const port = process.env.PORT;
// console.log(port);
require("./db/conn");

const express = require("express");
const app = express();

const router = require("./routers/router");
const APIRouter = require("./routers/APIRouter");
const { urlencoded } = require("express");
const  path  = require("path");

const viewPath = path.join(__dirname,"./views/")
app.set("views",viewPath);
app.set("view engine","ejs");

app.use(express.json());
app.use(urlencoded({extended:false}));
app.use("/",router);
app.use("/api/",APIRouter);




app.listen(port,()=>{
    console.log(`listening to port number => ${port}`);
});


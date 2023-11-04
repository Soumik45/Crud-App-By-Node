const express = require("express");
const app = express();
const UserRouter = require("./routes/user");

require("./config/db")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users",UserRouter)

app.get("/",(req,res)=>{

    // whenever we are in / route, we can see the index.html
    res.sendFile(__dirname+"/views/index.html")
})

// route not found error or invalid route
app.use((req, res, next) => {
    res.status(404).json({
      message: "route not found",
    });
  });

module.exports = app
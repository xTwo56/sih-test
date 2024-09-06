const express = require("express")
const port = 4000;
const app = express()
const dbConnect = require('./config/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/router')

app.use(cookieParser())
app.use(express.json())

dbConnect()

app.get("/hello", (req, res) => {
  console.log("hello")
  res.send("hello")
})

app.use("/api", userRoutes)

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running at port--" + port);
  }
  else {
    console.log("Error is---" + error);
  }
})

const express = require("express")
const port = 4000;
const app = express()
const dbConnect = require('./config/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/router')
const cors = require('cors')

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

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

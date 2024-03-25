const express = require("express");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connect");
const userRoute = require("./routes/user");


const app = express();
const PORT = 8000;
const cors = require('cors');       
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
connectToMongoDB('mongodb://127.0.0.1:27017/client').then(() => {
  console.log('connected ')
}).catch(err => {
  console.log('err', err)})
app.use(express.json());
app.get("/",(req, res)=>{
  res.send("hey ! ")
})
app.use("/user",userRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

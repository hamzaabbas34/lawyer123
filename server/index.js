const express = require("express");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connect");
const app = express();
const PORT = 8000;
const cors = require('cors');       
const bodyParser = require('body-parser');
const userRoute = require("./routes/user");
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow connections from any origin
    methods: ["POST", "GET"],
  }
});

const messages = [];

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);
  socket.emit("previous-messages", messages);

  socket.on("send-message", (data) => {
    messages.push(data); // Push the entire message object
    console.log(data)
    io.emit("receive_message", data); // Emit the entire message object
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Apply CORS globally
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
connectToMongoDB('mongodb://127.0.0.1:27017/client')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
  res.send("hey!");
});

app.use("/user", userRoute);

server.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));

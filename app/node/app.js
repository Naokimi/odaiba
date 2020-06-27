const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("hello there");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("answerQ", function(response) {
    console.log(response);
    socket.broadcast.emit("answerQ", response);
  });
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log("listening on *:", process.env.PORT || 3001);
});

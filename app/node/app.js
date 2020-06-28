const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("hello there");
});

let db = {
  groups: [
    {
      id: 1,
      name: "Group 1",
      video_call_code: "abc",
      turn_time: 60 * 5,
      session_time: 60 * 15,
      status: "onprogress",
      users: [
        {
          id: 1,
          name: "Dzakki",
          isTeacher: false,
          join: false,
          turn: true,
        },
        {
          id: 2,
          name: "Myra",
          isTeacher: false,
          join: false,
          turn: false,
        },
        {
          id: 3,
          name: "Paolo",
          isTeacher: false,
          join: false,
          turn: false,
        },
        {
          id: 4,
          name: "Anh",
          isTeacher: false,
          join: false,
          turn: false,
        },
        // {
        //   id: 5,
        //   name: "Julen",
        //   isTeacher: true,
        //   join: false,
        //   turn: false
        // },
      ],
      classroom_id: 1,
      score: 0,
      answered: 0,
      sheets: [],
      created_at: "2020-06-27T11:50:20.840Z",
      updated_at: "2020-06-27T11:50:20.840Z",
    },
    {
      id: 2,
      name: "Group 2",
      video_call_code: "abc",
      turn_time: 60 * 5,
      session_time: 60 * 15,
      status: "onprogress",
      users: [
        {
          id: 1,
          name: "Julen",
          isTeacher: false,
          join: false,
          turn: true,
        },
        {
          id: 2,
          name: "Myra",
          isTeacher: false,
          join: false,
          turn: false,
        },
        {
          id: 3,
          name: "Paolo",
          isTeacher: false,
          join: false,
          turn: false,
        },
      ],
      classroom_id: 1,
      score: 0,
      answered: 0,
      sheets: [],
      created_at: "2020-06-27T11:50:20.840Z",
      updated_at: "2020-06-27T11:50:20.840Z",
    },
  ],
};
/*
{
  id: 2,
  name: "Group 2",
  video_call_code: "abc",
  users: [
    {
      id: 1,
      name: "",
      isTeacher: false
    }
  ] 
  classroom_id: 1,
  created_at: "2020-06-27T11:50:20.840Z",
  updated_at: "2020-06-27T11:50:20.840Z",
}
*/

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("getGroups", function(to) {
    socket.emit(to, db.groups);
    // turn_time(60 * 5, 0, () => {
    //   socket.emit(to);
    //   socket.emit("realtime-groups");
    // });
    // turn_time(60 * 5, 1, () => {
    //   socket.emit(to);
    //   socket.emit("realtime-groups");
    // });
  });

  // socket.on()

  socket.on("updateSheet", function(response) {
    const { sheets, groupid } = response;
    const indexGroup = db.groups.findIndex(function(r) {
      return r.id === Number(groupid);
    });
    console.log(indexGroup, "indexGroup");
    db.groups[indexGroup].sheets = sheets;
    // console.log(db.groups[indexGroup].sheets)
    if (sheets.length) {
      realtimeGroup();
    }
    console.log(db.groups[0].answered);
    console.log(db.groups[0].score);
    io.emit("realtime-groups", db.groups);
  });
  socket.on("answerQ", function(response) {
    console.log(response);
    socket.broadcast.emit("answerQ", response);
    realtimeGroup();
    io.emit("realtime-groups", db.groups);
  });
  socket.on("newQ", function() {
    /* body... */
    socket.broadcast.emit("newQ");
    realtimeGroup();
    io.emit("realtime-groups", db.groups);
  });
});

function realtimeGroup() {
  for (let i = 0; i < db.groups.length; i++) {
    db.groups[i].answered;
    let answered = 0;
    let score = 0;
    for (var j = 0; j < db.groups[i].sheets.length; j++) {
      console.log(db.groups[i].sheets[j].questions[2]);
      if (db.groups[i].sheets[j].questions[2]) {
        answered++;
      }
      if (db.groups[i].sheets[j].questions[3]) {
        answered++;
      }
      if (
        db.groups[i].sheets[j].questions[2] ===
        db.groups[i].sheets[j].answers[2]
      ) {
        score += 5;
      }
      if (
        db.groups[i].sheets[j].questions[3] ===
        db.groups[i].sheets[j].answers[3]
      ) {
        score += 5;
      }
    }
    db.groups[i].answered = answered;
    db.groups[i].score = score;
  }
}

function turn_time(seconds, index, cb) {
  let duration = 60 * 5;
  let interval = setInterval(() => {
    db.groups[index].turn_time = seconds;

    if (--db.groups[index].session_time < 0) {
      db.groups[index].turn_time = 0;
      console.log("berhenti");
      cb();
      clearInterval(interval);
    }
    // console.log(seconds);
    if (--seconds < 0) {
      const indexOfTurn = db.groups[index].users.findIndex(function(r) {
        return r.turn === true;
      });
      db.groups[index].users[indexOfTurn].turn = false;

      if (indexOfTurn === db.groups[index].users.length - 1) {
        db.groups[index].users[0].turn = true;
        cb();
        // console.log(db.groups[index].users[0].turn, "000000");
      } else {
        db.groups[index].users[indexOfTurn + 1].turn = true;
        cb();
        // console.log(db.groups[index].users[indexOfTurn + 1].turn, "++++++");
        // db.groups[index].users[indexOfTurn + 1].name;
      }
      seconds = duration;
    }
  }, 1000);
}

app.get("/reset", (req, res) => {
  db = {
    groups: [
      {
        id: 1,
        name: "Group 1",
        video_call_code: "abc",
        turn_time: 60 * 5,
        session_time: 60 * 15,
        status: "onprogress",
        users: [
          {
            id: 1,
            name: "Dzakki",
            isTeacher: false,
            join: false,
            turn: true,
          },
          {
            id: 2,
            name: "Myra",
            isTeacher: false,
            join: false,
            turn: false,
          },
          {
            id: 3,
            name: "Paolo",
            isTeacher: false,
            join: false,
            turn: false,
          },
          {
            id: 4,
            name: "Anh",
            isTeacher: false,
            join: false,
            turn: false,
          },
          // {
          //   id: 5,
          //   name: "Julen",
          //   isTeacher: true,
          //   join: false,
          //   turn: false
          // },
        ],
        classroom_id: 1,
        score: 0,
        answered: 0,
        sheets: [],
        created_at: "2020-06-27T11:50:20.840Z",
        updated_at: "2020-06-27T11:50:20.840Z",
      },
      {
        id: 2,
        name: "Group 2",
        video_call_code: "abc",
        turn_time: 60 * 5,
        session_time: 60 * 15,
        status: "onprogress",
        users: [
          {
            id: 1,
            name: "Julen",
            isTeacher: false,
            join: false,
            turn: true,
          },
          {
            id: 2,
            name: "Myra",
            isTeacher: false,
            join: false,
            turn: false,
          },
          {
            id: 3,
            name: "Paolo",
            isTeacher: false,
            join: false,
            turn: false,
          },
        ],
        classroom_id: 1,
        score: 0,
        answered: 0,
        sheets: [],
        created_at: "2020-06-27T11:50:20.840Z",
        updated_at: "2020-06-27T11:50:20.840Z",
      },
    ],
  };
  res.json(db);
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log("listening on *:", process.env.PORT || 3001);
});

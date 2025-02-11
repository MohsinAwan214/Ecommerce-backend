import express, { response } from "express";
import cors from 'cors'
import 'dotenv/config'
import  './dateBase.js'
import { User } from "./models/index.js";



// appke


const app = express();
const port = process.env.PORT || 5003;


app.use(express.json());
app.use(cors( {origin : ["http://localhost:5173", "https://todo-with-mongo.surge.sh" ,"https://todo-with-mongo-nine.vercel.app"] }));

// app.get("/", (req, res) => {
//   res.send('testing todos');
// });


// app.get("/api/v1/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find({},
//       {  ip : 0 , __v: 0, updatedAt:0  }
//   ).sort({ _id : -1 })
//   const message = !todos.length ? "todo empty" : "all todos";



//   res.send({ data: todos, message: message });
//   } catch (error) {
//     res.status(500).send("internal server error")
//   }
// });

// ye naya todo add krny ke ley he
app.post("/api/v1/signup", async(req, res) => {
  try {
  const obj = {
    name : req.body.name,
    email: req.body.email,
    password: req.body.password

  };
  

  
  const result = await User.create(obj)
  

  // todos.push(obj);

  res.send({ message: "signup Successfully", data: result });
} catch (error) {
   res.status(500).send("Please Add Your Todo")
  
 }
});

app.post("/api/v1/login", async(req, res) => {
  try {
  // const obj = {
  //   name : req.body.name,
  //   email: req.body.email,
  //   password: req.body.password

  // };
  

  
  const result = await User.create(obj)
  

  // todos.push(obj);

  res.send({ message: "signup Successfully", data: result });
} catch (error) {
   res.status(500).send("Please Add Your Todo")
  
 }
});


app.use("/", (req, res) => {
  res.status(404).send({message:"No route found"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

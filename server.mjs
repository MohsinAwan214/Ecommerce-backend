import express from "express";
import {proucts} from "./productData.js";
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3003;

app.use(cors())


app.get("/", (req, res) => {
  
  res.send('Hellow World 123');
});


app.get("/product", (req, res) => {  
  // console.log('req',req);
  // res.send({ name: 'Lemon', price: 20 , quantity:'21kg' });

  res.send(proucts)
  
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

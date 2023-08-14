import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './modules/Usuario.js'

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect(
  'mongodb+srv://Blog:eLKoywbCs0xt4auu@blog-mern.sgyv9id.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/registrar', async (req,res) => {
  const {usuario, senha}  = req.body
  const userDoc = await User.create({
    usuario,
    senha
  })
  res.json(userDoc)
})

app.listen(4000);

// eLKoywbCs0xt4auu
// mongodb+srv://Blog:eLKoywbCs0xt4auu@blog-mern.sgyv9id.mongodb.net/?retryWrites=true&w=majority
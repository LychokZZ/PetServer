const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5001;
const router = require('./authRouter');


const allowedOrigins = [
   "http://localhost:3000", 
   "https://lychokzz.github.io", 
   "https://server-eight-lac-10.vercel.app",
   "https://server-lychokzzs-projects.vercel.app"
];

app.use(cors());
app.use(express.json());
app.use('/auth' ,router)



const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.zlqhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log('Error while connecting to the database: ', e);
  }
};

start();


module.exports = app;
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MDB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', ()=>console.log('connection error'));
db.once('open', function() {
  console.log("Connected");
}); 

//Reminder Routes
const reminderRoutes = require('./routes/reminders');

app.use('/reminders',reminderRoutes);

app.listen(port, ()=>{
  console.log("listening to port : "+port);
});
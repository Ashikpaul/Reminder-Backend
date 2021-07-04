const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reminderSchema = new Schema({
  activityname : { type: String, required:false, trim:true },
  time : { type: String, required:false, trim:true },
  description : { type:String, required:false, trim:true },
  status : { type:String, required:false, trim:true },
  // activitytype : { type:String, required:false, trim:true }
},{
  timestamps:false
});

const Reminder = mongoose.model('reminders', reminderSchema);

module.exports = Reminder;
const router = require('express').Router();
let Reminder = require('../models/reminder.model');

router.route('/').get((req, res)=>{
  Reminder.find()
    .then(reminders => res.json(reminders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res)=>{
  Reminder.findById(req.params.id)
    .then(exes => res.json(exes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res)=>{
  Reminder.findByIdAndDelete(req.params.id)
    .then(() => res.json("Reminder Deleted"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res)=>{
  Reminder.findById(req.params.id)
    .then((exes) => {
      exes.activityname = req.body.activityname;
      exes.time = req.body.time;
      exes.description = req.body.description;
      exes.status = req.body.status;
      // exes.activitytype = req.body.activitytype;

      exes.save()
      .then(()=> res.json("Reminder updated"))
      .catch((err)=> res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=>{
  const activityname = req.body.activityname;
  const time = req.body.time;
  const description = req.body.description;
  const status = req.body.status;
  // const activitytype = req.body.activitytype;
  const newReminder = new Reminder({
    activityname,
    time,
    description,
    status
    // activitytype,
  }); 

  newReminder.save()
  .then(() => res.json('New Reminder added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
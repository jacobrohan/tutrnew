const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/user');
const cors = require('cors');
const passport = require('passport');
const app = express();

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;
console.log(db);
mongoose.connect(db, { useNewUrlParser: true });
mongoose.connection.once('open', function(){
    console.log("Connected to Mongo");
});

app.get('/dashboard', passport.authenticate('jwt', {session:false}),(req,res) => {
  return res.json({
    data: [
      {
        "subject": "Advanced ReactJS",
        "tutr": "Mustafa"
        "time": "4 pm",
        "date": "25th Aug, 2018",
        "location": "Dubai",
        "number of participants": "5"
      }
    ]
  })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
app.use('/users', users);

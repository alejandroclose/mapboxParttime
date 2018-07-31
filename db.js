const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comedores', { reconnectTries: false }, (err) => {
  if (err) {
    console.error(`💣 ${err.name}: ${err.message}`)
    process.exit(err.code);

  } else {
    console.log('connected');
  }

});



module.exports = mongoose;
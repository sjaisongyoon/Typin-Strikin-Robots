const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    multiplayerWins: {
      type: Number,
      required: true,
      default: 0
    },
    multiplayerLosses: {
      type: Number,
      required: true,
      default: 0
    },
    singleplayerWPM: {
      type: Number,
      required: true,
      default: 0
    },
    // numMatches: {
    //   type: Number,
    //   required: true,
    //   default: 0
    // },
  })

module.exports = User = mongoose.model('users', UserSchema);

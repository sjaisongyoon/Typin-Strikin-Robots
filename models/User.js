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
    multiplayer_wins: {
      type: Number,
      require: true,
      default: 0
    },
    multiplayer_losses: {
      type: Number,
      require: true,
      default: 0
    },
    singleplayer_wpm: {
      type: Number,
      require: true,
      default: 0
    },
  })

module.exports = User = mongoose.model('users', UserSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    gameType: {
        type: String,
        required: true
    },
    winnerId: {
        type: Schema.Types.ObjectId, //same as mongoose.Types.ObjectId
        ref: 'users',
        required: true
    },
    winnerWPM: {
        type: Number,
        require: true,
    },
    loserId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    loserWPM: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = Match = mongoose.model('matches', MatchSchema);
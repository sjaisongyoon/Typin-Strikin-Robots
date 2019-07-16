const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MultiplayerGameRoomSchema = new Schema({
    player1Id: {
        type: Schema.Types.ObjectId, //same as mongoose.Types.ObjectId
        ref: 'users',
        required: true
    },
    player2Id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    passageId: {
        type: Number,
        required: true,
        default: Math.floor(Math.random() * (7 - 0 + 1)) + 0,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = MultiplayerGameRoom = mongoose.model('multiplayerGameRooms', MultiplayerGameRoomSchema);
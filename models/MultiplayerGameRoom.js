const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MultiplayerGameRoomSchema = new Schema({
    player1Id: {
        type: Schema.Types.ObjectId, //same as mongoose.Types.ObjectId
        ref: 'users',
        default: null
    },
    player2Id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    passage: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})



module.exports = MultiplayerGameRoom = mongoose.model('multiplayerGameRooms', MultiplayerGameRoomSchema);
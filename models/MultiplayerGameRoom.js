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
    date: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = MultiplayerGameRoom = mongoose.model('multiplayerGameRooms', MultiplayerGameRoomSchema);
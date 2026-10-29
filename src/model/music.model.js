const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true,
    }
})

const MusicModel = mongoose.model('Music', musicSchema);
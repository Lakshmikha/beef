const mongoose = require('mongoose')


const episodeSchema = new mongoose.Schema({
    episodeNumber: Number,
    title: String,
    airDate:  String,
    description: String
})

const Episode = mongoose.model("Episode", episodeSchema)

module.exports = Episode
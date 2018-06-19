var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var videoSchema = new Schema({
    title: String,
    video_id: String
})

var Video = mongoose.model('Video', videoSchema);


module.exports = Video;
const mongoose = require('mongoose');
const Video = require('./Video_model');
const mongoDB = 'mongodb://127.0.0.1/ytdl';

mongoose.connect(mongoDB);


exports.saveVideo = (video_data) => {
    var video = new Video({
        title: video_data.title,
        video_id: video_data.videoId
    });

    console.log(video_data.title);

    video.save(function(err) {
        if (err) throw err;
      
        console.log('User saved successfully!');
      });

}

exports.getVideo = async(video_id_in) => {
    Video.find({video_id: video_id_in}, (err, vid) =>{  
        if (err) return res.status(500).send(err)
        //console.log(vid);
        return vid;
    });
}

exports.getAllVideos = () => {
    return Video.find({});
}
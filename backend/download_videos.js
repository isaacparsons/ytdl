
const shell = require('shelljs');


var downloadVideo = (video_id) => {
    shell.exec('./yt_script.sh https://www.youtube.com/watch?v='+video_id);
}

module.exports = downloadVideo;
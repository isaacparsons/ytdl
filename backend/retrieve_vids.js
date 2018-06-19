const math = require('math');
const axios = require('axios');
const async = require('async');
const Video_db = require('./Video_db');
const Video = require('./Video');
const download_vids = require('./download_videos');
const API_KEY = 'AIzaSyAZrugEV7EeFh33BycTd6ds0t6CQuGIs2c';


var nextToken='';
var length;
var videos = [];

exports.get_videos = () => {
    get_all_vids();    
}

function get_all_vids(){
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PL5_utIFlpJ4obs3GHyAYjMOcAY_u11har&key='+API_KEY)
        .then(response => {
            length = math.ceil(response.data.pageInfo.totalResults/response.data.pageInfo.resultsPerPage);
            get_one_page(1);
      })
      .catch(error => {
        console.log(error);
      });
}

function get_one_page(i){
    if(i <= length){
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken='+ nextToken +'&playlistId=PL5_utIFlpJ4obs3GHyAYjMOcAY_u11har&key='+API_KEY)
            .then(response => {

                nextToken = response.data.nextPageToken;

                for(var j = 0; j<response.data.items.length;j++){
                    let title = response.data.items[j].snippet.title;
                    let vidId = response.data.items[j].snippet.resourceId.videoId;
                    let video = new Video(title, vidId);
                    compare_to_db(video);
                }
                get_one_page(i+1);

            })
            .catch(error => {
                console.log(error);
             })
    } else {
        console.log('Successfully retrieved video data!');
        return;
    } 
}
function compare_to_db(video){
    var db_result = Video_db.getVideo(video.videoId);
    db_result.then((vid) =>{
        console.log(db_result);
        if(db_result === undefined || db_result.length == 0){
            // download_vids(video.videoId);
            //Video_db.saveVideo(video);
            console.log("NOT already in db:   "+ video.title);
        } else {
            console.log("already in db:   "+ video.title);
        }
    });
}




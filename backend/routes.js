

const express = require('express');
const router = express.Router();
const retrieve_vids = require('./retrieve_vids');


router.get('/', (request, response)=>{
    response.send('Hello World');
    retrieve_vids.get_videos();
    
});

module.exports = router;
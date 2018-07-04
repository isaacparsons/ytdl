import { PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'
const {fs} = RNFetchBlob
const PATH_OF_SONGS_DIR = '/storage/emulated/0/Android/SONGS'
const DIRS = RNFetchBlob.fs.dirs


export async function musicDir(){
    try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            'title': 'ytdl Permsission',
            'message': 'ytdl needs permission to your external storage'
          })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use external storage")
        } else {
          console.log("external storage permission denied")
        }
      } catch (err) {
        console.warn(err)
      }

    /* check if a directory has been created and if not, create a new one */

    const isDir = await RNFetchBlob.fs.isDir(PATH_OF_SONGS_DIR);
    if(!isDir){
        const mkSongsDir = await RNFetchBlob.fs.mkdir(PATH_OF_SONGS_DIR);
    }
}

export async function listSongs(){
 return RNFetchBlob.fs.ls(PATH_OF_SONGS_DIR)
    // returns a promise, which, when resolved, contains an array of the songs at the SONG directory
}
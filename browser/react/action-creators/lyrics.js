import {SET_LYRICS} from '../constants'


//creates new action of type set lyricsA
//different set lyric actions might have different lyric text to be committed 
export default function setLyrics(text){
  return {
    type: SET_LYRICS,
    lyric: text
  }
}

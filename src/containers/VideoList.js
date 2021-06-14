import React from 'react';
import VideoListItem from '../components/VideoListItem';

const VideoList = (props) => {
    const movieList = props.movieList;

    return (
    <div class="visible-scrollbar">
        <ul>
        {  movieList.map(movie => {
             return  <VideoListItem key={movie.id} movie={movie} callback={recevoirCallback}/>
            }) 
        }
        </ul>

     </div>
    );

    function recevoirCallback(movie){
        console.log('Voici le movie recu', movie);
        props.callback(movie);
    }
}

export default VideoList
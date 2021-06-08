import React from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';


const VideoListItem = (props) => {

const { movie } = props


    return (
        <li>
                <h5>Film recommandé : {movie.title} </h5> 
               <img height="100px" width="100px" src={`${IMAGE_PATH}${movie.poster_path}`} />
        </li>
    )
}

export default VideoListItem
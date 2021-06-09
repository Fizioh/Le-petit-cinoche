import React from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

const VideoDetail = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img height="200px" width="200px" src={`${IMAGE_PATH}${props.image}`} />
        </div>
    )
}

export default VideoDetail
import React from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

const VideoDetail = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img height="250px" width="250px" src={`${IMAGE_PATH}${props.image}`} />
        </div>
    )
}

export default VideoDetail
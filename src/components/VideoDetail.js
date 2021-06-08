import React from 'react';

const VideoDetail = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default VideoDetail
import React from 'react';

const Video = ({videoId}) => {

    const YOUTUBE_URL = 'https://www.youtube.com/embed/';
    return (
        <div>
            <iframe   
            width="600"
            height="400"
            src={`${YOUTUBE_URL}${videoId}`} />
        </div>
    )
}

export default Video;
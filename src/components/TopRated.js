import React from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';


const TopRated = (props) => {

const { movie } = props;


    return (
        <li className="topRatedItem" onClick={handleClick}>  
            <div className="media">

                <div className="media-left">
                <img height="130px" width="115px" src={`${IMAGE_PATH}${movie.poster_path}`} />
                </div>

                <div className="media-body">
                <h5>{movie.title} </h5> 
                </div>

            </div>
        </li>
    )

    function handleClick(){
        console.log('Voici le movie envoyé', movie);

        props.callback(movie);
    }
}

export default TopRated
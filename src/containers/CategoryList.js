import React from 'react';
import TopRated from '../components/TopRated';

const CategoryList = (props) => {
    const topRatedList = props.topRatedList;

    return (
    <div class="footer">
        <h1 class="titleList">Meilleures notes</h1>
        <ul class="top-rated-list">
        {  topRatedList.map(movie => {
             return  <TopRated key={movie.id} movie={movie} callback={recevoirCallback}/>
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

export default CategoryList
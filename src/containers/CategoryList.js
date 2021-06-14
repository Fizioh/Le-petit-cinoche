import React from 'react';
import TopRated from '../components/TopRated';
import Latest from '../components/Latest';

const CategoryList = (props) => {
    const topRatedList = props.topRatedList;
    const latestList = props.latestList;


    return (
    <div class="container">
    <div class="footer">

        <h1 class="titleList">Top 4</h1>
        <ul class="rated-list">
        {  topRatedList.map(movie => {
             return  <TopRated key={movie.id} movie={movie} callback={recevoirCallback}/>
            }) 
        }
        </ul>
        </div>
        <h1 class="titleList">Dernières sorties</h1>
        <ul class="rated-list">
        {  latestList.map(movie => {
             return  <Latest key={movie.id} movie={movie} callback={recevoirCallback}/>
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
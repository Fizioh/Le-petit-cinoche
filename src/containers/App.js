import { Component } from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar';
import Video from '../components/Video';
import VideoDetail from '../components/VideoDetail';
import VideoListItem from '../components/VideoListItem';
import VideoList from './VideoList';
import axios from 'axios';

const API_KEY = 'api_key=b378aacdd49ce64fd098ba4cce6be755';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      movieList: {},
      currentMovie: {}
    };
  }

  componentWillMount(){
    this.initMovies();
  }
  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      this.setState({
        movieList : response.data.results.slice(1, 6),  
        currentMovie : response.data.results[0] }, function(){
          this.applyCurrentVideo();
        });
      console.log('--- My response Data -----', this.state.movieList, this.state.currentMovie);
    }.bind(this));
  }

  applyCurrentVideo(){
      axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
          console.log('---- Movie current ----', response)
      }.bind(this));
  }

    render (){

      const renderVideoList = () => {
        if(this.state.movieList.length >= 5){
          return  <VideoList movieList={this.state.movieList} />
        }
      }

      return (
        <div className="App">
          <header className="App-header">
            <h1>Bienvenue sur <b>Le petit cinoche</b></h1>
            <SearchBar />
            {renderVideoList()}
            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} date={this.state.currentMovie.release_date}/>
       </header>
        </div>
      );
    }
}

export default App;

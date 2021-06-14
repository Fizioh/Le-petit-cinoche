import { Component } from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar';
import Video from '../components/Video';
import VideoDetail from '../components/VideoDetail';
import VideoList from './VideoList';
import CategoryList from './CategoryList';
import axios from 'axios';

const API_KEY = 'api_key=b378aacdd49ce64fd098ba4cce6be755';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const TOP_RATED_MOVIES_URL = 'discover/movie?language=fr&sort_by=vote_average.desc&include_adult=false&sort_by=vote_count.desc&append_to_response=images';
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      movieList: {},
      topRatedList: {},
      currentMovie: {}
    };
  }

  componentWillMount(){
    this.initMovies();
    this.initTopRated();
  }
  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      this.setState({
        movieList : response.data.results.slice(1, 20),  
        currentMovie : response.data.results[0] }, function(){
          this.applyCurrentVideo();
        });
      console.log('--- My response Data -----', this.state.movieList, this.state.currentMovie);
    }.bind(this));
  }
  initTopRated(){
    axios.get(`${API_END_POINT}${TOP_RATED_MOVIES_URL}&${API_KEY}`).then(function(response){
        this.setState({
          topRatedList: response.data.results.slice(0, 8)
        });
    }.bind(this));
  }

  applyCurrentVideo(){
      axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
          console.log('---- Movie current ----', response);
          const youtubeKey = response.data.videos.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId = youtubeKey;
          this.setState({currentMovie : newCurrentMovieState });
      }.bind(this));
  }


    recevoirCallback(movie){
      this.setState({currentMovie: movie}, () => {
        this.applyCurrentVideo();
        this.setRecommendation();
      })
    }

    setRecommendation(){
      axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function(response){
          this.setState(
            {movieList: response.data.results.slice(0, 5)}
          )}.bind(this));
    }

    onClickSearch(searchText){
      axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
            console.log('--- Movie Search --------', response);

            if(response.data && response.data.results[0]){

              if(response.data.results[0].id !== this.state.currentMovie.id){
                  this.setState({currentMovie: response.data.results[0]}, () => {
                    this.applyCurrentVideo();
                    this.setRecommendation();
                  })
              }

            }
        }.bind(this));
      }
    render (){



      const renderVideoList = () => {
        if(this.state.movieList.length >= 5){
          return  <VideoList movieList={this.state.movieList} callback={this.recevoirCallback.bind(this)} />
        }
      }
      const renderCategoryList = () => {
        if(this.state.topRatedList.length >= 5){
          return <CategoryList topRatedList={this.state.topRatedList} callback={this.recevoirCallback.bind(this)}/>
        }
      }

      return (
        <div className="App">
                     <h1>Le Petit Cinoche</h1>
          <div className="App-main">
              <header className="App-header">
              <Video videoId={this.state.currentMovie.videoId} />
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} image={this.state.currentMovie.poster_path} date={this.state.currentMovie.release_date}/>
              </header>
              <aside>       
              <SearchBar callback={this.onClickSearch.bind(this)} />
                {renderVideoList()}
              </aside>
          </div>

          <div className="App-footer">
            {renderCategoryList()}
          </div>
        
        </div>
      );
    }
}

export default App;

(this["webpackJsonple-petit-cinoche"]=this["webpackJsonple-petit-cinoche"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var c=i(2),n=i.n(c),a=i(17),s=i.n(a),o=(i(22),i(3)),r=i(4),l=i(6),u=i(5),d=(i(23),i(0)),h=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={placeholder:"Rechercher un film",inputValue:""},c}return Object(r.a)(i,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onChange:this.handleChange.bind(this),placeholder:this.state.placeholder}),Object(d.jsx)("button",{onClick:this.handleClick.bind(this),children:"Go !"})]})}},{key:"handleClick",value:function(){this.props.callback(this.state.inputValue)}}]),i}(c.Component),v=function(e){var t=e.videoId;return Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{width:"700",height:"400",src:"".concat("https://www.youtube.com/embed/").concat(t)})})},b=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("img",{height:"200px",width:"200px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(e.image)})]})},j=function(e){var t=e.movie;return Object(d.jsx)("li",{className:"list-group-item",onClick:function(){console.log("Voici le movie envoy\xe9",t),e.callback(t)},children:Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("img",{height:"100px",width:"100px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(t.poster_path)})}),Object(d.jsx)("div",{className:"media-body",children:Object(d.jsxs)("h5",{children:[t.title," "]})})]})})},p=function(e){var t=e.movieList;return Object(d.jsx)("div",{class:"visible-scrollbar",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(j,{movie:e,callback:i},e.id)}))})});function i(t){console.log("Voici le movie recu",t),e.callback(t)}},m=i(7),f=i.n(m),g="api_key=b378aacdd49ce64fd098ba4cce6be755",O="https://api.themoviedb.org/3/",x=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={movieList:{},currentMovie:{}},c}return Object(r.a)(i,[{key:"componentWillMount",value:function(){this.initMovies()}},{key:"initMovies",value:function(){f.a.get("".concat(O).concat("discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images","&").concat(g)).then(function(e){this.setState({movieList:e.data.results.slice(1,20),currentMovie:e.data.results[0]},(function(){this.applyCurrentVideo()})),console.log("--- My response Data -----",this.state.movieList,this.state.currentMovie)}.bind(this))}},{key:"applyCurrentVideo",value:function(){f.a.get("".concat(O,"movie/").concat(this.state.currentMovie.id,"?").concat(g,"&append_to_response=videos&include_adult=false")).then(function(e){console.log("---- Movie current ----",e);var t=e.data.videos.results[0].key,i=this.state.currentMovie;i.videoId=t,this.setState({currentMovie:i})}.bind(this))}},{key:"recevoirCallback",value:function(e){var t=this;this.setState({currentMovie:e},(function(){t.applyCurrentVideo()}))}},{key:"onClickSearch",value:function(e){f.a.get("".concat(O).concat("search/movie?language=fr&include_adult=false","&").concat(g,"&query=").concat(e)).then(function(e){var t=this;console.log("--- Movie Search --------",e),e.data&&e.data.results[0]&&e.data.results[0].id!==this.state.currentMovie.id&&this.setState({currentMovie:e.data.results[0]},(function(){t.applyCurrentVideo()}))}.bind(this))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Le Petit Cinoche"}),Object(d.jsx)(h,{callback:this.onClickSearch.bind(this)}),Object(d.jsxs)("div",{className:"App-main",children:[Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(v,{videoId:this.state.currentMovie.videoId}),Object(d.jsx)(b,{title:this.state.currentMovie.title,description:this.state.currentMovie.overview,image:this.state.currentMovie.poster_path,date:this.state.currentMovie.release_date})]}),Object(d.jsx)("aside",{children:function(){if(e.state.movieList.length>=5)return Object(d.jsx)(p,{movieList:e.state.movieList,callback:e.recevoirCallback.bind(e)})}()})]})]})}}]),i}(c.Component),k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,44)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.6bff9f8f.chunk.js.map
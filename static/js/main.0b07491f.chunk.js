(this["webpackJsonple-petit-cinoche"]=this["webpackJsonple-petit-cinoche"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),a=i(17),n=i.n(a),o=(i(22),i(4)),l=i(5),r=i(7),d=i(6),h=(i(23),i(0)),u=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={placeholder:"Rechercher un film",inputValue:""},c}return Object(l.a)(i,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",onChange:this.handleChange.bind(this),placeholder:this.state.placeholder}),Object(h.jsx)("button",{onClick:this.handleClick.bind(this),children:"Go !"})]})}},{key:"handleClick",value:function(){this.props.callback(this.state.inputValue)}}]),i}(c.Component),v=function(e){var t=e.videoId;return Object(h.jsx)("div",{children:Object(h.jsx)("iframe",{width:"700",height:"400",src:"".concat("https://www.youtube.com/embed/").concat(t)})})},j=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("p",{class:"description",children:e.description}),Object(h.jsx)("img",{height:"200px",width:"200px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(e.image)})]})},b=function(e){var t=e.movie;return Object(h.jsx)("li",{className:"list-group-item",onClick:function(){console.log("Voici le movie envoy\xe9",t),e.callback(t)},children:Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("img",{height:"150px",width:"120px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(t.poster_path)})}),Object(h.jsx)("div",{className:"media-body",children:Object(h.jsxs)("h5",{children:[t.title," "]})})]})})},p=function(e){var t=e.movieList;return Object(h.jsx)("div",{class:"visible-scrollbar",children:Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)(b,{movie:e,callback:i},e.id)}))})});function i(t){console.log("Voici le movie recu",t),e.callback(t)}},m=function(e){var t=e.movie;return Object(h.jsx)("li",{className:"topRatedItem",onClick:function(){console.log("Voici le movie envoy\xe9",t),e.callback(t)},children:Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("img",{height:"200px",width:"150px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(t.poster_path)})}),Object(h.jsx)("div",{className:"media-body",children:Object(h.jsxs)("h4",{children:[t.title," "]})})]})})},f=function(e){var t=e.movie;return Object(h.jsx)("li",{className:"topRatedItem",onClick:function(){console.log("Voici le movie envoy\xe9",t),e.callback(t)},children:Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("img",{height:"200px",width:"150px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(t.poster_path)})}),Object(h.jsx)("div",{className:"media-body",children:Object(h.jsxs)("h4",{children:[t.title," "]})})]})})},g=function(e){var t=e.topRatedList,i=e.latestList;return Object(h.jsxs)("div",{class:"container",children:[Object(h.jsxs)("div",{class:"footer",children:[Object(h.jsx)("h1",{class:"titleList",children:"Top 4"}),Object(h.jsx)("ul",{class:"rated-list",children:t.map((function(e){return Object(h.jsx)(m,{movie:e,callback:c},e.id)}))})]}),Object(h.jsx)("h1",{class:"titleList",children:"Derni\xe8res sorties"}),Object(h.jsx)("ul",{class:"rated-list",children:i.map((function(e){return Object(h.jsx)(f,{movie:e,callback:c},e.id)}))})]});function c(t){console.log("Voici le movie recu",t),e.callback(t)}},x=i(3),O=i.n(x),k="api_key=b378aacdd49ce64fd098ba4cce6be755",y="https://api.themoviedb.org/3/",_=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={movieList:{},topRatedList:{},latestList:{},currentMovie:{}},c}return Object(l.a)(i,[{key:"componentWillMount",value:function(){this.initMovies(),this.initTopRated(),this.initLatest()}},{key:"initMovies",value:function(){O.a.get("".concat(y).concat("discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images","&").concat(k)).then(function(e){this.setState({movieList:e.data.results.slice(1,20),currentMovie:e.data.results[0]},(function(){this.applyCurrentVideo()})),console.log("--- My response Data -----",this.state.movieList,this.state.currentMovie)}.bind(this))}},{key:"initTopRated",value:function(){O.a.get("".concat(y).concat("discover/movie?language=fr&sort_by=vote_average.desc&include_adult=false&sort_by=vote_count.desc&append_to_response=images","&").concat(k)).then(function(e){this.setState({topRatedList:e.data.results.slice(0,4)})}.bind(this))}},{key:"initLatest",value:function(){O.a.get("".concat(y).concat("discover/movie?language=fr-FR&primary_release_year=2021&sort_by=realease_date.desc&region=fr&include_adult=false&append_to_response=image","&").concat(k)).then(function(e){var t=e.data.results.slice(0,16);this.setState({latestList:t})}.bind(this))}},{key:"applyCurrentVideo",value:function(){O.a.get("".concat(y,"movie/").concat(this.state.currentMovie.id,"?").concat(k,"&append_to_response=videos&include_adult=false")).then(function(e){console.log("---- Movie current ----",e);var t=e.data.videos.results[0].key,i=this.state.currentMovie;i.videoId=t,this.setState({currentMovie:i})}.bind(this))}},{key:"recevoirCallback",value:function(e){var t=this;this.setState({currentMovie:e},(function(){t.applyCurrentVideo(),t.setRecommendation()}))}},{key:"setRecommendation",value:function(){O.a.get("".concat(y,"movie/").concat(this.state.currentMovie.id,"/recommendations?").concat(k,"&language=fr")).then(function(e){this.setState({movieList:e.data.results.slice(0,5)})}.bind(this))}},{key:"onClickSearch",value:function(e){O.a.get("".concat(y).concat("search/movie?language=fr&include_adult=false","&").concat(k,"&query=").concat(e)).then(function(e){var t=this;console.log("--- Movie Search --------",e),e.data&&e.data.results[0]&&e.data.results[0].id!==this.state.currentMovie.id&&this.setState({currentMovie:e.data.results[0]},(function(){t.applyCurrentVideo(),t.setRecommendation()}))}.bind(this))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{class:"title",children:"Le Petit Cinoche"}),Object(h.jsxs)("div",{className:"App-main",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(v,{videoId:this.state.currentMovie.videoId}),Object(h.jsx)(j,{title:this.state.currentMovie.title,description:this.state.currentMovie.overview,image:this.state.currentMovie.poster_path,date:this.state.currentMovie.release_date})]}),Object(h.jsxs)("aside",{children:[Object(h.jsx)(u,{callback:this.onClickSearch.bind(this)}),function(){if(e.state.movieList.length>=5)return Object(h.jsx)(p,{movieList:e.state.movieList,callback:e.recevoirCallback.bind(e)})}()]})]}),Object(h.jsx)("div",{className:"App-footer",children:function(){if(e.state.topRatedList.length>=4&e.state.latestList.length>=5)return Object(h.jsx)(g,{latestList:e.state.latestList,topRatedList:e.state.topRatedList,callback:e.recevoirCallback.bind(e)})}()})]})}}]),i}(c.Component),L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,44)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),c(e),s(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),L()}},[[43,1,2]]]);
//# sourceMappingURL=main.0b07491f.chunk.js.map
(this["webpackJsonple-petit-cinoche"]=this["webpackJsonple-petit-cinoche"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var c=i(2),n=i.n(c),s=i(17),a=i.n(s),o=(i(22),i(3)),r=i(4),l=i(6),d=i(5),u=(i(23),i(0)),h=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text"}),Object(u.jsx)("button",{children:"Rechercher"})]})}}]),i}(c.Component),v=function(e){var t=e.videoId;return Object(u.jsx)("div",{children:Object(u.jsx)("iframe",{width:"700",height:"400",src:"".concat("https://www.youtube.com/embed/").concat(t)})})},j=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("img",{height:"200px",width:"200px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(e.image)})]})},b=function(e){var t=e.movie;return Object(u.jsx)("li",{className:"list-group-item",onClick:function(){console.log("Voici le movie envoy\xe9",t),e.callback(t)},children:Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("img",{height:"100px",width:"100px",src:"".concat("https://image.tmdb.org/t/p/w300").concat(t.poster_path)})}),Object(u.jsx)("div",{className:"media-body",children:Object(u.jsxs)("h5",{children:[t.title," "]})})]})})},p=function(e){var t=e.movieList;return Object(u.jsx)("div",{class:"visible-scrollbar",children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(b,{movie:e,callback:i},e.id)}))})});function i(t){console.log("Voici le movie recu",t),e.callback(t)}},m=i(8),O=i.n(m),f="api_key=b378aacdd49ce64fd098ba4cce6be755",x="https://api.themoviedb.org/3/",g=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).state={movieList:{},currentMovie:{}},c}return Object(r.a)(i,[{key:"componentWillMount",value:function(){this.initMovies()}},{key:"initMovies",value:function(){O.a.get("".concat(x).concat("discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images","&").concat(f)).then(function(e){this.setState({movieList:e.data.results.slice(1,20),currentMovie:e.data.results[0]},(function(){this.applyCurrentVideo()})),console.log("--- My response Data -----",this.state.movieList,this.state.currentMovie)}.bind(this))}},{key:"applyCurrentVideo",value:function(){O.a.get("".concat(x,"movie/").concat(this.state.currentMovie.id,"?").concat(f,"&append_to_response=videos&include_adult=false")).then(function(e){console.log("---- Movie current ----",e);var t=e.data.videos.results[0].key,i=this.state.currentMovie;i.videoId=t,this.setState({currentMovie:i})}.bind(this))}},{key:"recevoirCallback",value:function(e){var t=this;this.setState({currentMovie:e},(function(){t.applyCurrentVideo()}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Le Petit Cinoche"}),Object(u.jsx)(h,{className:"SearchBar"}),Object(u.jsxs)("div",{className:"App-main",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(v,{videoId:this.state.currentMovie.videoId}),Object(u.jsx)(j,{title:this.state.currentMovie.title,description:this.state.currentMovie.overview,image:this.state.currentMovie.poster_path,date:this.state.currentMovie.release_date})]}),Object(u.jsx)("aside",{children:function(){if(e.state.movieList.length>=5)return Object(u.jsx)(p,{movieList:e.state.movieList,callback:e.recevoirCallback.bind(e)})}()})]})]})}}]),i}(c.Component),y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,44)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),c(e),n(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.2507cdf9.chunk.js.map
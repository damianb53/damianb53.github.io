(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(14),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),b=a(8),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={burger:{active:!1}},a.burgerOnClick=function(e){a.setState({burger:Object(b.a)({},a.state.burger,{active:!a.state.burger.active})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"Navbar"},r.a.createElement("div",{className:"Navbar__logo"}),r.a.createElement("div",{className:"Navbar__burger"},r.a.createElement("button",{onClick:this.burgerOnClick},r.a.createElement("i",{className:"material-icons"},"menu"))),r.a.createElement("div",{className:"Navbar__menu ".concat(this.state.burger.active?"Navbar__menu-active":null)},r.a.createElement("a",{href:"/"},"About"),r.a.createElement("a",{href:"/"},"Sign up"),r.a.createElement("a",{href:"/"},"Log in")))}}]),t}(n.Component),h=function(e){return r.a.createElement("section",{className:"Footer"},r.a.createElement("p",null,r.a.createElement("b",null,"Memer")," by ",r.a.createElement("a",{href:"https://github.com/damianb53"},"damianb53"),". The website contains images from 9gag.com, I do not own any of this."))},g=function(e){var t=e.link,a=e.alt;return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:t,alt:a}))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={imgs:["1900/1900","1300/1500","1400/1600"]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{title:"Memer"}),r.a.createElement("main",{className:"Timeline"},this.state.imgs.map(function(e,t){return r.a.createElement(g,{key:t,link:"//unsplash.it/".concat(e)})})),r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.8f3a7776.chunk.js.map
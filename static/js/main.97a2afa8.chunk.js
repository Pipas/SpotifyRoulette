(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),c=n(2),a=n.n(c),s=(n(12),n(3)),r=n(4),u=n(5),h=n.n(u),l=function(){function t(){Object(s.a)(this,t),this.client=void 0,this.auth=!1,this.client=new h.a}return Object(r.a)(t,[{key:"authenticateUser",value:function(){var t=window.location.hash.substring(1).split("&")[0].split("=")[1];window.location.hash="";return t?(this.client.setAccessToken(t),this.auth=!0):window.location.href="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("41e10dc3f3594667b190b3681fdee8ca","&redirect_uri=").concat("https://pipas.github.io/SpotifyRoulette/","&scope=").concat(["user-top-read"].join("%20"),"&response_type=token&show_dialog=true"),!!t}},{key:"isAuthenticated",value:function(){return this.auth}}]),t}(),d=(n(13),function(){var t=new l;return Object(o.useEffect)(function(){t.isAuthenticated()||t.authenticateUser()}),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"test"))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,n){t.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.97a2afa8.chunk.js.map
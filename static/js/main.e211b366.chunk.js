(this["webpackJsonpwikipedia-near-me"]=this["webpackJsonpwikipedia-near-me"]||[]).push([[0],{25:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(30),n(7)),s=n.n(i),u=n(8),p=n(18),l=n(11),f=n(12);function m(){var t=Object(l.a)(["\n  body {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n"]);return m=function(){return t},t}var d=Object(f.a)(m()),g=n(3),h=n.n(g),b=n(37),v=n(35),j=n(38),O=n(36);function w(){var t=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return w=function(){return t},t}var y=Object(f.b)(O.a)(w()),k=h.a.icon({iconUrl:"https://image.flaticon.com/icons/svg/49/49360.svg",iconSize:[35,35],popupAnchor:[0,-20]}),E=function(t){var e=[[29.925994,-39.193599],[29.945994,-39.143599]];return void 0!==t.articles&&t.articles.map((function(t){return e.push([t.lat,t.lon])})),e.length>10&&(e=(e=e.splice(1)).splice(1)),a.a.createElement(y,{zoomSnap:.1,bounds:Object(g.latLngBounds)(e),boundsOptions:{padding:[40,40]},maxBounds:Object(g.latLngBounds)(e),maxBoundsViscosity:1,zoomControl:!1},a.a.createElement(b.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),void 0!==t.articles?t.articles.map((function(t,e){return a.a.createElement(v.a,{position:[t.lat,t.lon],key:"coords"+e,icon:k},a.a.createElement(j.a,null,a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/"+t.title},t.title)))})):null)},x=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r,a,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=".concat(e,"&gsradius=10000&gslimit=10&gsnamespace=0&origin=*"),"15.925994%7C-37.193399"===e){t.next=10;break}return t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return a=t.sent,o=a.query.geosearch,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(r.useState)([]),e=Object(p.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)([15.925994,-37.193399]),i=Object(p.a)(c,2),l=i[0],f=i[1],m=Object(r.useState)(15),g=Object(p.a)(m,1)[0];return Object(r.useEffect)((function(){setTimeout((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=function(){navigator.geolocation.getCurrentPosition(n)},n=function(t){f([t.coords.latitude,t.coords.longitude])},e();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),1e3)}),[]),Object(r.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(l[0]+"%7C"+l[1]);case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[l]),a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement(E,{articles:n,coords:l,zoom:g}))};c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e211b366.chunk.js.map
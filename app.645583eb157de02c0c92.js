(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{37:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e.n(r),c=e(36),a=e(26),u=e(21),i=e(28),p=e(27),l={path:"console",component:function(){return e.e(0).then(e.bind(null,57))}},s={path:"landing",component:function(){return e.e(2).then(e.bind(null,56))},routes:[{path:"",exact:!0,redirect:"login"},{path:"login",exact:!0,component:function(){return e.e(1).then(e.bind(null,55))}}]},f=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},h=function(n,t){return void 0===t&&(t=""),n.map(function(n){var e=(n=f({},n)).path;e=n.path=t+(!e||e.startsWith("/")?e:"/"+e),n.routes&&(n.routes=h(n.routes,e));var r,c=n.redirect;return n.component?n.component=(r=n.component,Object(p.asyncComponent)({resolve:function(){return r().then(function(n){return n.default||n})}})):c&&(n.component=function(n){return function(){return o.a.createElement(i.a,{to:n})}}(c.startsWith("/")?c:e+"/"+c)),n})},d=h([{path:"/",exact:!0,redirect:"/landing"},s,l]),m=function(){return Object(u.a)(d)};Object(c.render)(o.a.createElement(a.a,{basename:"/react-rubick"},o.a.createElement(m,null)),document.getElementById("app"))},54:function(n,t,e){n.exports=e(37)}},[[54,3,4]]]);
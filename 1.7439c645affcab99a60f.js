(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{72:function(t,e,n){"use strict";n.r(e);var r,o=n(1),a=n.n(o),u=n(21),i=n(30),c=n(9),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function u(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,i)}c((r=r.apply(t,e||[])).next())})},p=function(t,e){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0,authed:!1},e}return l(e,t),e.prototype.componentDidMount=function(){return s(this,void 0,void 0,function(){return p(this,function(t){switch(t.label){case 0:return[4,Object(c.b)(500)];case 1:return t.sent(),this.setState({loading:!1,authed:Math.random()<.5}),[2]}})})},e.prototype.componentDidUpdate=function(){this.state.authed||this.props.history.replace({pathname:"/landing",search:Object(c.c)({next:this.props.location.pathname})})},e.prototype.render=function(){return this.state.loading||!this.state.authed?"Loading...":a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"left-panel"},"Nav"),a.a.createElement("main",null,a.a.createElement(c.a.Consumer,null,function(t){return a.a.createElement("ul",null,t.map(function(t){var e=t.label,n=t.url;return a.a.createElement("li",{key:e},a.a.createElement(i.b,{to:n},e))}))}),Object(u.b)(this.props.route.routes)))},e}(a.a.PureComponent);e.default=f}}]);
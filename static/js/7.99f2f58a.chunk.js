(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{303:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=n(34),s=n.n(c),l=n(301),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(l.b)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},943:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=n(387),s=n(303),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p=function(e){var t=e.to,n=e.exact,r=e.strict,o=e.location,i=e.activeClassName,p=e.className,f=e.activeStyle,m=e.style,h=e.isActive,y=e["aria-current"],d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),g="object"===("undefined"===typeof t?"undefined":u(t))?t.pathname:t,b=g&&g.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return a.a.createElement(c.a,{path:b,exact:n,strict:r,location:o,children:function(e){var n=e.location,r=e.match,o=!!(h?h(r,n):r);return a.a.createElement(s.a,l({to:t,className:o?[p,i].filter(function(e){return e}).join(" "):p,style:o?l({},m,f):m,"aria-current":o&&y||null},d))}})};p.propTypes={to:s.a.propTypes.to,exact:i.a.bool,strict:i.a.bool,location:i.a.object,activeClassName:i.a.string,className:i.a.string,activeStyle:i.a.object,style:i.a.object,isActive:i.a.func,"aria-current":i.a.oneOf(["page","step","location","date","time","true"])},p.defaultProps={activeClassName:"active","aria-current":"page"},t.a=p},997:function(e,t,n){"use strict";n.r(t);var r=n(150),a=n(151),o=n(154),i=n(152),c=n(155),s=n(0),l=n.n(s),u=n(153),p=n(125),f=n(124),m=n(303),h=n(943),y=n(1001),d=function(e){var t=e.signIn,n=e.register;return l.a.createElement(f.r.Item,{position:"right"},l.a.createElement(f.a,{onClick:t,basic:!0,inverted:!0,content:"\u0412\u0445\u043e\u0434"}),l.a.createElement(f.a,{onClick:n,basic:!0,inverted:!0,content:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",style:{marginLeft:"0.5em"}}))},g=function(e){var t=e.signOut,n=e.profile,r=e.auth;return l.a.createElement(f.r.Item,{position:"right"},l.a.createElement(f.m,{avatar:!0,spaced:"right",src:n.photoURL||"/assets/user.png"}),l.a.createElement(f.g,{pointing:"top left",text:n.displayName},l.a.createElement(f.g.Menu,null,l.a.createElement(f.g.Item,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0421\u043e\u0431\u044b\u0442\u0438\u0435",icon:"plus"}),l.a.createElement(f.g.Item,{text:"\u041c\u043e\u0438 \u0421\u043e\u0431\u044b\u0442\u0438\u044f",icon:"calendar"}),l.a.createElement(f.g.Item,{text:"\u041c\u043e\u0438 \u0414\u0440\u0443\u0437\u044c\u044f",icon:"users"}),l.a.createElement(f.g.Item,{as:m.a,to:"/profile/".concat(r.uid),text:"\u041c\u043e\u044f \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430",icon:"user"}),l.a.createElement(f.g.Item,{as:m.a,to:"/settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings"}),l.a.createElement(f.g.Item,{onClick:t,text:"\u0412\u044b\u0439\u0442\u0438",icon:"power"}))))},b={openModal:n(300).b},v=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).handleSignIn=function(){n.props.openModal("LoginModal")},n.handleRegister=function(){n.props.openModal("RegisterModal")},n.handleSignOut=function(){n.props.firebase.logout(),n.props.history.push("/")},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.profile,r=t.isLoaded&&!t.isEmpty;return l.a.createElement(f.r,{inverted:!0,fixed:"top"},l.a.createElement(f.d,null,l.a.createElement(f.r.Item,{as:m.a,to:"/",header:!0},l.a.createElement("img",{src:"/assets/full-stack-project/logo.png",alt:"logo"}),"Bukakke"),l.a.createElement(f.r.Item,{as:h.a,to:"/events",name:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"}),r&&l.a.createElement(f.r.Item,{as:h.a,to:"/people",name:"\u041b\u044e\u0434\u0438"}),r&&l.a.createElement(f.r.Item,null,l.a.createElement(f.a,{as:m.a,to:"/createEvent",floated:"right",positive:!0,inverted:!0,content:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"})),r?l.a.createElement(g,{auth:t,profile:n,signOut:this.handleSignOut}):l.a.createElement(d,{signIn:this.handleSignIn,register:this.handleRegister})))}}]),t}(s.Component);t.default=Object(y.a)(Object(p.withFirebase)(Object(u.connect)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},b)(v)))}}]);
//# sourceMappingURL=7.99f2f58a.chunk.js.map
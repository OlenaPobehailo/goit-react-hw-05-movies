"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{122:function(t,r,n){n.r(r),n.d(r,{default:function(){return i}});var e=n(439),u=n(615),a=n(689),c=n(390),s=n(184),i=function(){var t=(0,a.UO)().movieId,r=(0,u.j)(c.Bt,t),n=(0,e.Z)(r,2),i=n[0],o=n[1],f=o.isLoading,p=o.error;return f?(0,s.jsx)("h2",{children:"Loading reviews..."}):p?(0,s.jsxs)("p",{children:["Error: ",p]}):(0,s.jsx)("ul",{children:i&&i.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:"Author: ".concat(t.author)}),(0,s.jsx)("p",{children:t.content})]},t.id)}))})}},615:function(t,r,n){n.d(r,{j:function(){return a}});var e=n(439),u=n(791),a=function(t,r){var n=(0,u.useState)(null),a=(0,e.Z)(n,2),c=a[0],s=a[1],i=(0,u.useState)(null),o=(0,e.Z)(i,2),f=o[0],p=o[1],d=(0,u.useState)(!1),v=(0,e.Z)(d,2),h=v[0],l=v[1];return(0,u.useEffect)((function(){l(!0),t(r).then((function(t){s(t),l(!1)})).catch((function(t){p(t.message),l(!1)}))}),[t,r]),[c,s,{error:f,isLoading:h}]}},390:function(t,r,n){n.d(r,{Bt:function(){return d},LI:function(){return v},Mc:function(){return f},wr:function(){return o},xj:function(){return i},y:function(){return p}});var e=n(683),u=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="https://image.tmdb.org/t/p/w500";s.Z.defaults.params={api_key:"9ce8efc3ff8d8ed00ad4e59e8fd58805"};var o=function(){var t=(0,u.Z)(c().mark((function t(r){var n,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day",{params:(0,e.Z)({},r)});case 2:return n=t.sent,u=n.data,t.abrupt("return",u.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/credits"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/reviews"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,u.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?query=".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=122.ed16f792.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{929:function(n,e,r){r.d(e,{Z:function(){return c}});var t,a=r(780),i=r(168),o=r(867).ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #f5f5f5;\n"]))),s=r(184),c=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(a.Z,{color:"#ff0000"})})}},615:function(n,e,r){r.d(e,{j:function(){return i}});var t=r(439),a=r(791),i=function(n,e){var r=(0,a.useState)(null),i=(0,t.Z)(r,2),o=i[0],s=i[1],c=(0,a.useState)(null),u=(0,t.Z)(c,2),f=u[0],d=u[1],l=(0,a.useState)(!1),p=(0,t.Z)(l,2),h=p[0],v=p[1];return(0,a.useEffect)((function(){v(!0),n(e).then((function(n){s(n),v(!1)})).catch((function(n){d(n.message),v(!1)}))}),[n,e]),[o,s,{error:f,isLoading:h}]}},46:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,a,i,o=r(439),s=r(791),c=r(689),u=r(87),f=r(390),d=function(n,e){if(isNaN(n)||isNaN(e))throw new Error("Invalid voting");return 0===e?0:((10*n*e+5*(0===e?0:e/10*10))/e).toFixed(1)},l=r(168),p=r(867),h=p.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n\n  img {\n    width: 350px;\n    height: auto;\n  }\n"]))),v=p.ZP.div(a||(a=(0,l.Z)(["\n  padding: 1.5rem;\n\n  h2 {\n    margin-bottom: 2.5rem;\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    margin-bottom: 2rem;\n    font-size: 1.8rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n    margin-bottom: 2rem;\n  }\n"]))),m=p.ZP.div(i||(i=(0,l.Z)(["\n  p {\n    font-size: 1.2rem;\n    margin-bottom: 10px; \n  }\n  \n  a {\n    color: goldenrod; \n    font-size: 1.2rem;\n    margin-right: 15px; \n  }\n\n  a:hover {\n    text-decoration: underline; \n  }\n"]))),x=r(184),g=function(n){var e=n.movie,r=e.title,t=e.overview,a=e.genres,i=e.poster_path,o=e.release_date,l=e.vote_average,p=e.vote_count,g=i?f.xj+i:null,j=a?a.map((function(n){return n.name})).join(", "):null,Z=new Date(o).getFullYear();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(h,{children:[(0,x.jsx)("img",{src:g||"https://placehold.co/350x500?text=Not+available",alt:r}),(0,x.jsxs)(v,{children:[(0,x.jsxs)("h2",{children:[r||"Title is not available"," (",Z,")"]}),(0,x.jsxs)("p",{children:["User score: ",d(l,p)," %"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:t||"no information available"}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:j||"no information available"})]})]}),(0,x.jsxs)(m,{children:[(0,x.jsx)("p",{children:"Additional information:"}),(0,x.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,x.jsx)(u.rU,{to:"reviews",children:"Reviews"})]}),(0,x.jsx)("div",{children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)("h2",{children:"Loading additional information..."}),children:(0,x.jsx)(c.j3,{})})})]})},j=r(929),Z=r(615),w=function(){var n,e=(0,c.UO)().movieId,r=(0,c.TH)(),t=(0,s.useRef)((null===(n=r.state)||void 0===n?void 0:n.from)||"/"),a=(0,Z.j)(f.Mc,e),i=(0,o.Z)(a,2),d=i[0],l=i[1],p=l.isLoading,h=l.error;return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(u.rU,{to:t.current,children:"Back"}),p&&(0,x.jsx)(j.Z,{}),h&&(0,x.jsxs)("p",{children:["Error: ",h]}),d&&(0,x.jsx)("div",{children:(0,x.jsx)(g,{movie:d})})]})}},390:function(n,e,r){r.d(e,{Bt:function(){return l},LI:function(){return p},Mc:function(){return f},wr:function(){return u},xj:function(){return c},y:function(){return d}});var t=r(683),a=r(861),i=r(757),o=r.n(i),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="https://image.tmdb.org/t/p/w500";s.Z.defaults.params={api_key:"9ce8efc3ff8d8ed00ad4e59e8fd58805"};var u=function(){var n=(0,a.Z)(o().mark((function n(e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day",{params:(0,t.Z)({},e)});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?query=".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=46.403f12ad.chunk.js.map
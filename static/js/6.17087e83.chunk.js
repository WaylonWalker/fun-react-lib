(this["webpackJsonpfun-react-lib"]=this["webpackJsonpfun-react-lib"]||[]).push([[6],{130:function(e,t,n){e.exports=n.p+"static/media/infinite-scroll.76a4df80.md"},24:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n.n(a),i=n(7),o=n(0),u=n.n(o),s=n(28),l=n.n(s),f=function(e){var t=e.children,n=e.hasMore,r=e.isLoading,a=e.isError,c=e.triggerFunction,i=e.loadingComponent,s=void 0===i?null:i,l=e.errorComponent,f=void 0===l?null:l,d=Object(o.useRef)();return Object(o.useEffect)((function(){if(!r&&!a){var e=new IntersectionObserver((function(e){e[0].isIntersecting&&n&&c()}),{rootMargin:"10% 0px 10% 0px"});return e.observe(d.current),function(){e.disconnect()}}}),[r,a,n,c,d]),u.a.createElement("div",null,t,u.a.createElement("div",{id:"infinite-scrolling-observer",ref:d}),r&&s,a&&f)},d=n(130),p=n.n(d),m=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://randomuser.me/api","/?page=").concat(t,"&results=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.default=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(o.useEffect)((function(){fetch(p.a).then((function(e){return e.text()})).then((function(e){a(e)}))}));var c=function(e){var t=Object(o.useState)(e.data),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useState)(e.page),u=Object(r.a)(i,2),s=u[0],l=u[1],f=Object(o.useState)(e.hasMore),d=Object(r.a)(f,2),p=d[0],b=d[1],g=Object(o.useState)(e.isLoading),h=Object(r.a)(g,2),E=h[0],v=h[1],j=Object(o.useState)(e.isError),O=Object(r.a)(j,2),M=O[0],x=O[1];return Object(o.useEffect)((function(){var e=!1;return v(!0),x(!1),m(s,10).then((function(t){e||(c((function(e){return e.concat(t)})),v(!1),x(!1),b(!0))})).catch((function(){x(!0),v(!1)})),function(){e=!0}}),[s]),{data:a,setPage:l,hasMore:p,isLoading:E,isError:M}}({data:[],page:1,hasMore:!0,isLoading:!1,isError:!1}),i=c.data,s=c.setPage,d=c.hasMore,b=c.isLoading,g=c.isError;return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,{source:n}),u.a.createElement("div",null,u.a.createElement("h2",null,"My User List"),u.a.createElement(f,{hasMore:d,isLoading:b,isError:g,triggerFunction:function(){s((function(e){return e+1}))},loadingComponent:u.a.createElement("p",null,"loading..."),errorComponent:u.a.createElement("p",null,"An error ocurred...")},i.map((function(e,t){return u.a.createElement("div",{key:t},u.a.createElement("h3",null,"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last)),u.a.createElement("p",null,e.cell," - ",e.email))})))))}}}]);
//# sourceMappingURL=6.17087e83.chunk.js.map
(this["webpackJsonpreact-profile-list"]=this["webpackJsonpreact-profile-list"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(11),s=c.n(a),o=(c(18),c(9)),i=c.n(o),j=c(12),l=c(4),u=c(3);c(20);var b=c(1),f=function(){return Object(b.jsx)("div",{className:"spinner-overlay",children:Object(b.jsx)("div",{className:"spinner-container"})})},d=(c(22),c(10)),O=c(13);function p(e,t){return e>t-1?0:e<0?t-1:e}c(23);var h=c(5),x=c.p+"static/media/avatar.28237e7f.png",v={google:Object(b.jsx)(h.b,{}),linkedin:Object(b.jsx)(h.c,{}),facebook:Object(b.jsx)(h.a,{}),office365:Object(b.jsx)(h.d,{}),twitter:Object(b.jsx)(h.e,{})},m=function(e){var t=e.photos,c=Object(n.useState)(0),r=Object(u.a)(c,2),a=r[0],s=r[1],o=Object(n.useState)(0),i=Object(u.a)(o,2),j=i[0],l=i[1],d=Object(n.useState)(!1),O=Object(u.a)(d,2),h=O[0],m=O[1];if(Object(n.useEffect)((function(){s(0),l(0)}),[t]),!t[a])return Object(b.jsx)(f,{});var g=t[a].url,N=(t[a]||"Unknown").source,k=t.length,y=function(){s((function(e){return p(e+1,k)}))};return Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("div",{className:"photo",children:Object(b.jsx)("img",{src:g,alt:"profile user ",className:"photo__img",onError:function(e){m(!0),l(j+1),j!==k?y():e.target.src=x},onLoad:function(e){m(!1),l(0),console.log("I was called")}})}),Object(b.jsxs)("span",{className:"photo-source",children:[Object(b.jsx)("em",{children:"Source: "})," ",h?"\ud83d\ude35":v[N]||"\ud83d\ude35"]}),Object(b.jsx)("button",{className:"next-photo-btn",onClick:y,children:"Next Photo"})]})},g=["google","linkedin","facebook","twitter","office365"],N=function(e){var t=e.profiles,c=Object(n.useState)(0),r=Object(u.a)(c,2),a=r[0],s=r[1],o=t[a],i=o.firstName,j=o.lastName,l=function(e,t,c){var n=Object(O.a)(e),r=function(e){var t={};return e.forEach((function(e,c){t[e]=c+1})),t}(t);return n.sort((function(e,t){var n=e[c],a=t[c];return r[n]-r[a]})),n}(o.photos,g,"source"),f=t.length;return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)("div",{className:"profile__photo",children:Object(b.jsx)(m,{photos:l})}),Object(b.jsx)("div",{className:"profile__info",children:"".concat(i||""," ").concat(j||"")}),Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsx)("button",{className:"prev-btn",onClick:function(){s((function(e){return p(e-1,f)}))},children:Object(b.jsx)(d.a,{})}),Object(b.jsx)("button",{className:"next-btn",onClick:function(){s((function(e){return p(e+1,f)}))},children:Object(b.jsx)(d.b,{})})]})]})};var k=function(){var e=function(e){var t={loading:!0,error:null,data:[]},c="FETCH_START",r="FETCH_SUCCESS",a="FETCH_ERROR",s=Object(n.useReducer)((function(e,n){switch(n.type){case c:return Object(l.a)(Object(l.a)({},t),{},{loading:!0,error:null});case r:return Object(l.a)(Object(l.a)({},t),{},{loading:!1,data:n.payload,error:null});case a:return Object(l.a)(Object(l.a)({},t),{},{loading:!1,error:n.payload});default:return e}}),t),o=Object(u.a)(s,2),b=o[0],f=o[1];return Object(n.useEffect)((function(){!function(){var t=Object(j.a)(i.a.mark((function t(){var n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f({type:c}),t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:s=t.sent,f({type:r,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),f({type:a,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),{state:b}}("https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json").state,t=e.loading,c=e.error,r=e.data;return c?Object(b.jsx)("main",{children:"Oops"}):t?Object(b.jsx)("main",{children:Object(b.jsx)(f,{})}):Object(b.jsx)("main",{children:Object(b.jsxs)("section",{className:"container",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"User Profiles"}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)(N,{profiles:r})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.07fe3931.chunk.js.map
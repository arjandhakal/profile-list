(this["webpackJsonpreact-profile-list"]=this["webpackJsonpreact-profile-list"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(11),s=n.n(a),o=(n(18),n(9)),i=n.n(o),j=n(12),u=n(4),l=n(3);n(20);var b=n(1),f=function(){return Object(b.jsx)("div",{className:"spinner-overlay",children:Object(b.jsx)("div",{className:"spinner-container"})})},d=(n(22),n(10)),O=n(13);function p(e,t){return e>t-1?0:e<0?t-1:e}n(23);var h=n(5),x=n.p+"static/media/avatar.28237e7f.png",v={google:Object(b.jsx)(h.b,{}),linkedin:Object(b.jsx)(h.c,{}),facebook:Object(b.jsx)(h.a,{}),office365:Object(b.jsx)(h.d,{}),twitter:Object(b.jsx)(h.e,{})},m=function(e){var t=e.photos,n=Object(c.useState)(0),r=Object(l.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(0),i=Object(l.a)(o,2),j=i[0],u=i[1],d=Object(c.useState)(!1),O=Object(l.a)(d,2),h=O[0],m=O[1];if(Object(c.useEffect)((function(){s(0),u(0)}),[t]),!t[a])return Object(b.jsx)(f,{});var N=t[a].url,g=(t[a]||"Unknown").source,k=t.length,y=function(){s((function(e){return p(e+1,k)}))};return Object(b.jsxs)("div",{className:"photo-container",children:[Object(b.jsx)("div",{className:"photo",children:Object(b.jsx)("img",{src:N,alt:"profile user ",className:"photo__img",onError:function(e){if(m(!0),u(j+1),j===k)return e.target.src=x,void m(!1);y()},onLoad:function(e){m(!1),u(0)}})}),Object(b.jsxs)("span",{className:"photo-source",children:[Object(b.jsx)("em",{children:"Source: "})," ",h?"\ud83d\ude35":v[g]||"\ud83d\ude35"]}),Object(b.jsx)("button",{className:"next-photo-btn",onClick:y,children:"Next Photo"})]})},N=["google","linkedin","facebook","twitter","office365"],g=function(e){var t=e.profiles,n=Object(c.useState)(0),r=Object(l.a)(n,2),a=r[0],s=r[1],o=t[a],i=o.firstName,j=o.lastName,u=function(e,t,n){var c=Object(O.a)(e),r=function(e){var t={};return e.forEach((function(e,n){t[e]=n+1})),t}(t);return c.sort((function(e,t){var c=e[n],a=t[n];return r[c]-r[a]})),c}(o.photos,N,"source"),f=t.length;return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)("div",{className:"profile__photo",children:Object(b.jsx)(m,{photos:u})}),Object(b.jsx)("div",{className:"profile__info",children:"".concat(i||""," ").concat(j||"")}),Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsx)("button",{className:"prev-btn",onClick:function(){s((function(e){return p(e-1,f)}))},children:Object(b.jsx)(d.a,{})}),Object(b.jsx)("button",{className:"next-btn",onClick:function(){s((function(e){return p(e+1,f)}))},children:Object(b.jsx)(d.b,{})})]})]})};var k=function(){var e=function(e){var t={loading:!0,error:null,data:[]},n="FETCH_START",r="FETCH_SUCCESS",a="FETCH_ERROR",s=Object(c.useReducer)((function(e,c){switch(c.type){case n:return Object(u.a)(Object(u.a)({},t),{},{loading:!0,error:null});case r:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,data:c.payload,error:null});case a:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,error:c.payload});default:return e}}),t),o=Object(l.a)(s,2),b=o[0],f=o[1];return Object(c.useEffect)((function(){!function(){var t=Object(j.a)(i.a.mark((function t(){var c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f({type:n}),t.prev=1,t.next=4,fetch(e);case 4:return c=t.sent,t.next=7,c.json();case 7:s=t.sent,f({type:r,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),f({type:a,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),{state:b}}("https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json").state,t=e.loading,n=e.error,r=e.data;return n?Object(b.jsx)("main",{children:"Oops"}):t?Object(b.jsx)("main",{children:Object(b.jsx)(f,{})}):Object(b.jsx)("main",{children:Object(b.jsxs)("section",{className:"container",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"User Profiles"}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)(g,{profiles:r})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0dc20f1b.chunk.js.map
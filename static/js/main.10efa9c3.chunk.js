(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=a.p+"static/media/trophy.4eb8ddde.svg",l=a(0),o=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"header-title",children:[Object(l.jsx)("h1",{children:"Ping Pong Score"}),Object(l.jsx)("img",{src:i,alt:"trophy"})]}),Object(l.jsx)("div",{className:"header-name",children:Object(l.jsx)("p",{children:"by Jordi Mesas del Rio"})})]})})},j=a(2),h=a.p+"static/media/chevron-right-purple.7452395a.svg",d=a.p+"static/media/chevron-down-purple.f6902967.svg",b=function(e){var t=e.match,a=Object(c.useState)(!1),s=Object(j.a)(a,2),n=s[0],r=s[1];return Object(l.jsxs)("div",{className:"match-items",children:[Object(l.jsxs)("div",{className:"match-items-layout",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Players: ",t.playerHome," vs ",t.playerOut]}),Object(l.jsxs)("p",{children:[" Score: ",t.score]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{onClick:function(){return r(!n)},src:n?d:h,alt:"arrow"})})]}),n&&Object(l.jsxs)("p",{className:"match-items-styleWinner",children:["The ",t.winner," player is the winner"]})]})},m=function(e){var t=e.matchNotLastMonth,a=Object(c.useState)(!1),s=Object(j.a)(a,2),n=s[0],r=s[1];return Object(l.jsxs)("div",{className:"match-items",children:[Object(l.jsxs)("div",{className:"match-items-layout",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Players: ",t.playerHome," vs ",t.playerOut]}),Object(l.jsxs)("p",{children:[" Score:",t.score]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{onClick:function(){return r(!n)},src:n?d:h,alt:"arrow"})})]}),n&&Object(l.jsxs)("p",{className:"match-items-styleWinner",children:["The ",t.winner," player is the winner"]})]})},O=s.a.createContext({}),u=a.p+"static/media/chevron-right-black.757914a7.svg",p=a.p+"static/media/chevron-down-black.a815d3cb.svg",x=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!0),r=Object(j.a)(n,2),i=r[0],o=r[1],h=Object(c.useContext)(O),d=h.state,x=h.dateLastMonthShowDate,v=d.matches,g=d.matchesNotLastMonth;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"score",children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)("button",{className:"score-lastMonth",type:"button",onClick:function(){o(!i),i&&x()},children:"Last Month"}),Object(l.jsxs)("ul",{className:"score-allGames",children:[Object(l.jsx)("li",{children:"all the games"}),Object(l.jsxs)("li",{className:"score-allGames-animate",onClick:function(){s(!a)},children:[" ",Object(l.jsx)("img",{src:a?p:u,alt:"arrow"})," "]})]})]}),a?v.map((function(e){return Object(l.jsx)(b,{match:e},e.id)})):null,i&&a&&g.map((function(e){return Object(l.jsx)(m,{matchNotLastMonth:e},e.id)}))]})})},v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)(o,{})}),Object(l.jsx)("main",{children:Object(l.jsx)(x,{})})]})},g=a(9),w=a(4),f=a(8),y=function(){var e=Object(c.useState)(f),t=Object(j.a)(e,2),a=t[0],s=t[1];return{addToMatch:function(e){s(Object(w.a)(Object(w.a)({},a),{},{matches:[].concat(Object(g.a)(a.matches),[e])}))},dateLastMonthShowDate:function(){var e={notLastMonth:a.matches.filter((function(e){return new Date(Date.parse(e.date)).getMonth()!==(new Date).getMonth()||new Date(Date.parse(e.date)).getFullYear()!==(new Date).getFullYear()})),lastMonth:a.matches.filter((function(e){return new Date(Date.parse(e.date)).getMonth()===(new Date).getMonth()&&new Date(Date.parse(e.date)).getFullYear()===(new Date).getFullYear()}))};0!==e.notLastMonth.length&&s(Object(w.a)(Object(w.a)({},a),{},{matches:e.lastMonth,matchesNotLastMonth:e.notLastMonth}))},state:a}},M=(a(15),function(){var e=y();return Object(l.jsx)(O.Provider,{value:e,children:Object(l.jsx)(v,{})})});r.a.render(Object(l.jsx)(M,{}),document.getElementById("app"))},8:function(e){e.exports=JSON.parse('{"matches":[{"id":1,"date":"2020-03-01","playerHome":"Jordi","playerOut":"David","score":"2-11 / 6-11 / 4-11","winner":"David"},{"id":2,"date":"2021-01-28","playerHome":" Pol","playerOut":"Marc","score":"6-11 / 7-11 / 6-11","winner":"Marc"},{"id":3,"date":"2021-03-02","playerHome":"Sara","playerOut":"Ernesto","score":"11-9 / 7-11 / 6-11 / 4-11","winner":"Sara"}],"matchesNotLastMonth":[]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.10efa9c3.chunk.js.map
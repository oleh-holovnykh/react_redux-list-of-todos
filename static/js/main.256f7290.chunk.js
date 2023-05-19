(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a,n=c(10),s=c.n(n),r=c(9),i=c(18),o=c(7),l=c(16),d=c(17),u=c(4),j=function(e){return{type:"currentTodo/SET",payload:e}},h=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return Object(u.a)({},t.payload);case"currentTodo/REMOVE":return null;default:return e}};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var O=function(e){return{type:"changeStatus",payload:e}},f=function(e){return{type:"changeQuery",payload:e}},m={query:"",status:a.ALL},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeStatus":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});case"changeQuery":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});default:return e}},p=c(19),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?Object(p.a)(t.payload):e},y=function(e){return{type:"todos/ADD",payload:e}},N=Object(o.combineReducers)({currentTodo:b,filter:x,todos:v}),g=Object(o.createStore)(N,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),T=c(11),k=c(3),w=c(6),E=c.n(w),C=c(0),L=(c(28),c(29),c(12)),S=c.n(L),A=r.b,D=r.c,I=c(1),M=function(e){var t=e.todos,c=D((function(e){return e.currentTodo})),a=A();return Object(I.jsxs)(I.Fragment,{children:[!t.length&&Object(I.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(I.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:" "})]})}),Object(I.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,s=e.completed,r=(null===c||void 0===c?void 0:c.id)===t;return Object(I.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":r}),children:[Object(I.jsx)("td",{className:"is-vcentered",children:t}),Object(I.jsx)("td",{className:"is-vcentered",children:s&&Object(I.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("td",{className:"is-vcentered is-expanded",children:Object(I.jsx)("p",{className:S()({"has-text-success":s,"has-text-danger":!s}),children:n})}),Object(I.jsx)("td",{className:"has-text-right is-vcentered",children:Object(I.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(j(e))},children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:S()("far",{"fa-eye-slash":r,"fa-eye":!r})})})})})]},t)}))})]})]})},_=function(){var e=D((function(e){return e.filter})),t=A(),c=e.status,n=e.query;return Object(I.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("span",{className:"select",children:Object(I.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){switch(e.target.value){case"all":t(O(a.ALL));break;case"active":t(O(a.ACTIVE));break;case"completed":t(O(a.COMPLETED))}},children:[Object(I.jsx)("option",{value:"all",children:"All"}),Object(I.jsx)("option",{value:"active",children:"Active"}),Object(I.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(I.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(I.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){var c=e.target.value;t(f(c))}}),Object(I.jsx)("span",{className:"icon is-left",children:Object(I.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(I.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:0!==n.length&&Object(I.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(f(""))}})})]})]})},q=(c(31),function(){return Object(I.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(I.jsx)("div",{className:"Loader__content"})})});function P(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var V=function(e){return P("/users/".concat(e))},B=function(){var e=Object(C.useState)(null),t=Object(k.a)(e,2),c=t[0],a=t[1],n=D((function(e){return e.currentTodo})),s=A(),r=Object(C.useState)(!1),i=Object(k.a)(r,2),o=i[0],l=i[1],d=n,u=d.id,j=d.title,b=d.completed,O=d.userId,f=function(){var e=Object(T.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(O);case 3:t=e.sent,a(t),l(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(C.useEffect)((function(){f()}),[]);var m=!c&&!o;return Object(I.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(I.jsx)("div",{className:"modal-background"}),m?Object(I.jsx)(q,{}):Object(I.jsxs)("div",{className:"modal-card",children:[Object(I.jsxs)("header",{className:"modal-card-head",children:[Object(I.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(u)}),Object(I.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(h())}})]}),Object(I.jsxs)("div",{className:"modal-card-body",children:[Object(I.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(I.jsxs)("p",{className:"block","data-cy":"modal-user",children:[b?Object(I.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(I.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",o?Object(I.jsx)("p",{className:"notification is-warning",children:"Can`t load user from server"}):Object(I.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},R=function(){var e=D((function(e){return e.todos})),t=D((function(e){return e.currentTodo})),c=D((function(e){return e.filter})),a=A(),n=Object(C.useState)(!1),s=Object(k.a)(n,2),r=s[0],i=s[1],o=function(){var e=Object(T.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("/todos");case 3:t=e.sent,a(y(t)),i(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(C.useEffect)((function(){o()}));var l=function(e,t){var c=e,a=t.query,n=t.status;return a&&(c=c.filter((function(e){var t=a.toLowerCase();return e.title.toLowerCase().includes(t)}))),"active"===n&&(c=c.filter((function(e){return!e.completed}))),"completed"===n&&(c=c.filter((function(e){return e.completed}))),c}(e,c),d=!e.length&&!r;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"section",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"title",children:"Todos:"}),Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(_,{})}),Object(I.jsxs)("div",{className:"block",children:[d?Object(I.jsx)(q,{}):Object(I.jsx)(M,{todos:l}),r&&Object(I.jsx)("p",{className:"notification is-warning",children:"Can`t load todos from server"})]})]})})}),t&&Object(I.jsx)(B,{})]})},F=function(){return Object(I.jsx)(r.a,{store:g,children:Object(I.jsx)(i.a,{children:Object(I.jsx)(R,{})})})};s.a.render(Object(I.jsx)(F,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.256f7290.chunk.js.map
(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(8),a=n.n(o),r=n(3),l=n(2),d=n(9),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(d.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},i=n(0),u=function(e){var t=e.todo,n=e.index,c=e.handleDelete,o=e.handleToogle;return Object(i.jsxs)("li",{className:"list-group-item ",children:[Object(i.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return o(t.id)},children:[n+1,". ",t.desc]}),Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(t.id)},children:"Borrar"})]},t.id)},j=function(e){var t=e.todos,n=e.handleDelete,c=e.handleToogle;return Object(i.jsx)("ul",{className:"list-group list-group-flush ",children:t.map((function(e,t){return Object(i.jsx)(u,{todo:e,index:t,handleDelete:n,handleToogle:c},e.id)}))})},b=n(6),p=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),o=n[0],a=n[1],d=function(e){var t=e.target;a(Object(l.a)(Object(l.a)({},o),{},Object(b.a)({},t.name,t.value)))};return[o,d,function(){a(e)}]}({description:""}),o=Object(r.a)(n,3),a=o[0].description,d=o[1],s=o[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{className:"text-primary",children:"Agregar producto a la lista"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<=1)){var n={id:(new Date).getTime(),desc:a,done:!1};t(n),s()}},children:[Object(i.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Producto...",autoComplete:"off",value:a,onChange:d}),Object(i.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-3 mb-3 btn-block",children:"Agregar"})]})]})},h=(n(15),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),m=function(){var e=Object(c.useReducer)(s,[],h),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{className:"text-primary",children:["Lista de la compra (",n.length,")"]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-7",children:Object(i.jsx)(j,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToogle:function(e){o({type:"toggle",payload:e})}})}),Object(i.jsx)("div",{className:"col-5",children:Object(i.jsx)(p,{handleAddTodo:function(e){o({type:"add",payload:e})}})})]})]})};a.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8ec89c09.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(16),o=t.n(r),a=t(17),u=t(3),i=t(1),s=function(e){var n=e.newFilter,t=e.filterChange;return Object(c.jsxs)("div",{children:["filter: ",Object(c.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.filterPerson,t=e.deletePerson;return Object(c.jsx)("div",{children:n.map((function(e,n){return Object(c.jsxs)("p",{children:[e.name,": ",e.number," ",Object(c.jsx)("button",{onClick:function(){return t(e.id,e.name)},children:"Delete"})]},n)}))})},d=function(e){var n=e.addPerson,t=e.newName,r=e.newNumber,o=e.nameChange,a=e.numberChange;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:o})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:r,onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},j=t(5),b=t.n(j),f="/api/persons",h=function(){return b.a.get(f).then((function(e){return e.data}))},m=function(e){return b.a.post(f,e).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},p=function(e){var n=e.message,t=e.messageType;return null===n?null:Object(c.jsx)("div",{className:t,children:n})},x=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(""),j=Object(u.a)(o,2),b=j[0],f=j[1],x=Object(i.useState)(""),g=Object(u.a)(x,2),w=g[0],C=g[1],k=Object(i.useState)(""),P=Object(u.a)(k,2),S=P[0],y=P[1],N=Object(i.useState)(null),T=Object(u.a)(N,2),D=T[0],L=T[1],A=Object(i.useState)(""),E=Object(u.a)(A,2),F=E[0],I=E[1];Object(i.useEffect)((function(){h().then((function(e){r(e)}))}),[]);var J=t?t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})):[];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:D,messageType:F}),Object(c.jsx)(s,{newFilter:S,filterChange:function(e){y(e.target.value)}}),Object(c.jsx)("h3",{children:"Add a new"}),Object(c.jsx)(d,{addPerson:function(e){e.preventDefault();var n={name:b,number:w},c=t.find((function(e){return e.name.toLowerCase()===b.toLowerCase()}));c?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&O(c.id,n).then((function(e){console.log(e),r(t.map((function(n){return n.id!==e.id?n:e}))),I("success"),L("Changed ".concat(c.name))})).catch((function(e){return console.log(e)})):m({name:b.trim(),number:w.trim()}).then((function(e){r([].concat(Object(a.a)(t),[e])),I("success"),L("Added ".concat(e.name))})).catch((function(e){I("error"),L("".concat(e.response.data.error))}));f(""),C(""),setTimeout((function(){L(null)}),3e3)},newName:b,newNumber:w,nameChange:function(e){f(e.target.value)},numberChange:function(e){C(e.target.value)}}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)(l,{filterPerson:J,deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))?v(e).then((function(c){204===c.status&&(r(t.filter((function(n){return n.id!==e}))),f(""),C(""),I("success"),L("Deleted ".concat(n)),setTimeout((function(){L(null)}),3e3))})).catch((function(c){I("error"),L("Information of ".concat(n," has already been removed from server!")),setTimeout((function(){L(null)}),3e3),r(t.filter((function(n){return n.id!==e})))})):console.log()}})]})};t(40);o.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.651cc117.chunk.js.map
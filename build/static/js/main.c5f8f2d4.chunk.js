(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{1:function(e,t,a){e.exports={calculateForm:"calculateForm_calculateForm__PDCXa",calculateForm__btn:"calculateForm_calculateForm__btn__3m8Vv",btn:"calculateForm_btn__2504i",inputName:"calculateForm_inputName__xRuGw",input:"calculateForm_input__SqAzl"}},10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(5),l=a.n(n),s=(a(10),a(3)),r=a(1),u=a.n(r),b=a(0),j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),r=Object(s.a)(l,2),j=r[0],i=r[1],o=Object(c.useState)("+"),m=Object(s.a)(o,2),p=m[0],O=m[1],h=Object(c.useState)(null),x=Object(s.a)(h,2),d=x[0],_=x[1],v=function(e){var t=e.target,a=t.name,c=t.value;"value1"===a&&n(c),"value2"===a&&i(c)};return Object(b.jsxs)("form",{className:u.a.calculateForm,onSubmit:function(e){e.preventDefault(),"+"===p&&_(parseInt(a)+parseInt(j)),"-"===p&&_(parseInt(a)-parseInt(j)),"*"===p&&_(parseInt(a)*parseInt(j)),"/"===p&&_(parseInt(a)/parseInt(j))},children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:u.a.inputName,children:"Number 1"}),Object(b.jsx)("input",{className:u.a.input,type:"number",name:"value1",step:"1",value:a,onChange:v,placeholder:"Enter a number (example: 1,5,10..)"})]}),Object(b.jsx)("p",{className:u.a.inputName,children:"Choose action"}),Object(b.jsxs)("select",{className:u.a.input,onChange:function(e){O(e.target.value)},children:[Object(b.jsx)("option",{value:"+",children:"+"}),Object(b.jsx)("option",{value:"-",children:"-"}),Object(b.jsx)("option",{value:"*",children:"*"}),Object(b.jsx)("option",{value:"/",children:"/"})]}),Object(b.jsxs)("div",{className:u.a.calculateForm__btn,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:u.a.inputName,children:"Number 2"}),Object(b.jsx)("input",{className:u.a.input,type:"number",name:"value2",step:"1",value:j,onChange:v,placeholder:"Enter a number (example: 1,5,10..)"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:u.a.btn,children:"Submit"}),Object(b.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){n(""),i(""),_("")},children:"Clear"})]}),Object(b.jsxs)("h3",{children:["Result : ",d]})]})},i=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsx)(j,{})})})};l.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c5f8f2d4.chunk.js.map
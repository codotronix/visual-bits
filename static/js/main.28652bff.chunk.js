(this["webpackJsonpvisual-bits"]=this["webpackJsonpvisual-bits"]||[]).push([[0],{24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(16),r=n.n(i),l=(n(24),n(14)),o=n(11),b=n(2),j=n(18),d={dec:0,bin:"00000000"},u=function(e){var t=e.name,n=Object(a.useState)(d),s=Object(j.a)(n,2),i=s[0],r=s[1],l=function(e){var t="LEFT"===e?i.dec<<1:i.dec>>1,n=o(t);r({dec:t,bin:n})},o=function(e){return e.toString(2).padStart(8,"0")};return Object(c.jsxs)("div",{className:"row dec-bin-row shadow",children:[Object(c.jsx)("div",{className:"col-sm-12 col-md-2 name",children:t}),Object(c.jsx)("div",{className:"col-sm-12 col-md-2",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"decimal"+t,children:"Dec"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"decimal"+t,value:i.dec,onChange:function(e){var t=parseInt(e.target.value);if(!isNaN(t)){if(t<0||t>255)return alert("The decimal number must be in the range 0 <= n <= 255");var n=o(t);r({dec:t,bin:n})}}})]})}),Object(c.jsx)("div",{className:"col-sm-12 col-md-8 d-flex binaries",children:i.bin.split("").map((function(e,n){return Object(c.jsxs)("div",{className:"form-group mr-2",children:[Object(c.jsxs)("label",{htmlFor:"bits-".concat(t,"-").concat(7-n),children:["2",Object(c.jsx)("sup",{children:7-n})]}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"bits-".concat(t,"-").concat(8-n),value:e,onChange:function(e){return function(e,t){var n=parseInt(e.target.value);if(isNaN(n)||n<0||n>1)return alert("A binary digit must be either 0 or 1");var c=i.bin.split("");c[t]=n,c=c.join("");var a=parseInt(c,2);r({dec:a,bin:c})}(e,n)}})]},n)}))}),Object(c.jsxs)("div",{className:"col-sm-12 btn-panel",children:[Object(c.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:function(){return l("LEFT")},children:[Object(c.jsx)("i",{className:"fas fa-angle-double-left"})," Left Shift"]}),Object(c.jsxs)("button",{type:"button",className:"btn btn-primary ml-2",onClick:function(){return l("RIGHT")},children:["Right Shift ",Object(c.jsx)("i",{className:"fas fa-angle-double-right"})]})]})]})},m=[{path:"/",component:function(){return Object(c.jsx)(b.a,{to:"/basics"})}},{path:"/basics",component:function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{name:"A"}),Object(c.jsx)(u,{name:"B"})]})}},{path:"/**",component:function(){return Object(c.jsx)(b.a,{to:"/"})}}],h=function(e){return Object(c.jsx)("div",{className:"header shadow",children:Object(c.jsx)("span",{className:"logo-text",children:"Visual Bits"})})};var f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{children:Object(c.jsx)(h,{})}),Object(c.jsx)("div",{className:"main-container container-fluid",children:Object(c.jsx)(o.a,{basename:"/visual-bits",children:Object(c.jsx)(b.d,{children:m.map((function(e){return Object(a.createElement)(b.b,Object(l.a)(Object(l.a)({},e),{},{exact:!0,key:e.path}))}))})})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.28652bff.chunk.js.map
(this["webpackJsonpindecision-app"]=this["webpackJsonpindecision-app"]||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e(1),o=e.n(r),c=e(13),a=e.n(c),u=(e(23),e(9)),d=e(6),s=(e(24),e(17)),f=e(3),p=e(4);function l(){var n=Object(f.a)(["\n    background-color: white;\n    color: #d97b93;\n    font-family: 'Montserrat';\n    font-weight: 800; \n    text-align: center; \n    padding: 20px 90px; \n    width: max-content;\n    border-radius: 15px;\n    font-size: 30px; \n    @media (max-width: 576px) {\n        font-size: 25px;\n        padding: 15px 85px;\n    }\n"]);return l=function(){return n},n}var b=p.a.div(l());var x=function(n){var t=n.decision;return Object(i.jsx)(b,{children:Object(i.jsx)("p",{children:t})})},j=e.p+"static/media/x-mark.6ce40db1.svg";function h(){var n=Object(f.a)(["\n    height: 20px;\n    width: 20px; \n    position: absolute;\n    right: 5px;\n    top: 5px; \n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.5;\n        transform: rotate(90deg);\n    } \n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n    background-color: ",";\n    color: #d97b93;\n    font-family: 'Montserrat';\n    text-align: center; \n    padding: 5px 50px; \n    width: max-content;\n    border-radius: 15px;\n    margin: 2px; \n    position: relative;\n"]);return g=function(){return n},n}m.defaultProps={onDeleteClick:void 0,isActive:!1};var O=p.a.div(g(),(function(n){return n.isActive?"#f0ccd4":"#ffffff"})),v=p.a.img(h());function m(n){var t=n.option,e=n.onDeleteClick,r=n.isActive,o=void 0!==r&&r;return Object(i.jsxs)(O,{isActive:o,children:[t,e&&Object(i.jsx)(v,{src:j,alt:"delete icon",onClick:function(){return e(t)}})]})}var w=m,k=e.p+"static/media/arrow-down-sign-to-navigate.e4ed3c68.svg";function y(){var n=Object(f.a)(["\n  position: absolute;\n  bottom: 5px; \n  left: 0;\n  width: 100vw;\n  font-family: 'Montserrat';\n  font-size: 10px;\n  opacity: 0.5;\n  a {\n    color: #ffffff;\n  }\n"]);return y=function(){return n},n}function z(){var n=Object(f.a)(["\n    padding-top: 5px;\n    padding-bottom: 5px;\n"]);return z=function(){return n},n}function M(){var n=Object(f.a)(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + ",' {\n    background: #d97b93;\n    &::after {\n      content: "";\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n']);return M=function(){return n},n}function C(){var n=Object(f.a)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #6e529d;\n  cursor: pointer;\n  &::after {\n    content: "";\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    background: #ffffff;\n    margin-top: 4px;\n    margin-left: 3px;\n    transition: 0.2s;\n  }\n']);return C=function(){return n},n}function S(){var n=Object(f.a)(["\n  position: relative;\n"]);return S=function(){return n},n}function D(){var n=Object(f.a)(["\n  display: inline-flex; \n  justify-content: center;\n  align-items: center; \n"]);return D=function(){return n},n}function F(){var n=Object(f.a)(["\n  display: inline-flex; \n  justify-content: center;\n"]);return F=function(){return n},n}function A(){var n=Object(f.a)(["\n  border: none; \n  border-radius: 20px;\n  height: 30px;\n  width: 250px; \n  padding-left: 15px;\n  padding-right: 15px;\n  font-family: 'Montserrat';\n  color:  #6e529d;\n  &:focus{\n    outline: none;\n  }\n"]);return A=function(){return n},n}function E(){var n=Object(f.a)(["\n  font-size: 20px;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  background-color:  #6e529d;\n  border: none;\n  &:hover {\n    background-color: #d97b93;\n    color: #ffffff; \n  }\n  @media (max-width: 576px) {\n    font-size: 17px;\n  }\n"]);return E=function(){return n},n}function L(){var n=Object(f.a)(["\n  background-color: transparent;\n  border: 1px solid white;\n  padding: 8px;\n  color: white;\n  font-family: 'Montserrat';\n  margin-left: 4.5px;\n  margin-right: 4.5px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  border-radius: 25px;\n  &:hover {\n    color: #6e529d;\n    background-color: white; \n  }\n  &:focus{\n    outline: none;\n  }\n"]);return L=function(){return n},n}function P(){var n=Object(f.a)(["\n  margin-top: 16px;\n"]);return P=function(){return n},n}function T(){var n=Object(f.a)(["\n  margin-bottom: 5px;\n"]);return T=function(){return n},n}function B(){var n=Object(f.a)(["\n  font-family: 'Montserrat'; \n  font-weight: 500;\n  @media (max-width: 576px) {\n    font-size: 10px;\n  }\n"]);return B=function(){return n},n}function I(){var n=Object(f.a)(["\n  font-size: 80px;\n  font-family: 'Montserrat';\n  margin-top: 15px; \n  @media (max-width: 576px) {\n    margin-bottom: 0px;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(f.a)(["\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return J=function(){return n},n}function K(){var n=Object(f.a)(["\nbackground: linear-gradient(to bottom, #6e529d 0%,#d97b93 100%);\n  min-height: 100vh;\n  min-width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: center;\n  color: #ffffff;\n"]);return K=function(){return n},n}var H=p.a.div(K()),N=p.a.div(J()),R=p.a.h1(I()),Z=p.a.p(B()),q=Object(p.a)(Z)(T()),G=p.a.div(P()),Q=p.a.button(L()),U=Object(p.a)(Q)(E()),V=p.a.input(A()),W=p.a.div(F()),X=p.a.div(D()),Y=p.a.div(S()),$=p.a.label(C()),_=p.a.input(M(),$),nn=p.a.div(z()),tn=p.a.div(y());var en=function(){var n=o.a.useState([]),t=Object(d.a)(n,2),e=t[0],c=t[1],a=o.a.useState([]),f=Object(d.a)(a,2),p=f[0],l=f[1],b=o.a.useState(),j=Object(d.a)(b,2),h=j[0],g=j[1],O=o.a.useState(!1),v=Object(d.a)(O,2),m=v[0],y=v[1],z=p.slice(0,5),M=Object(r.useRef)(null),C=function(n){if(n)for(var t=0;t<e.length;)e[t]===n?(e.splice(t,1),c(Object(u.a)(e))):t++};return Object(i.jsx)(H,{children:Object(i.jsxs)(N,{children:[Object(i.jsx)(R,{children:"Decidey"}),Object(i.jsx)(Z,{children:"Optionen eingeben"}),Object(i.jsxs)("form",{onSubmit:function(n){var t,i;n.preventDefault();var r=null===(t=M.current)||void 0===t?void 0:t.value;"testdata"===r?c(["Lasagne","Pizza","Spaghetti","Schnitzel","Suppe"]):""===r?alert("Bitte etwas in Textfeld eingeben!"):r&&c([].concat(Object(u.a)(e),[r])),(null===(i=M.current)||void 0===i?void 0:i.value)&&(M.current.value="")},children:[Object(i.jsx)(V,{type:"text",ref:M}),Object(i.jsx)(nn,{}),Object(i.jsxs)(G,{children:[Object(i.jsx)(Q,{type:"submit",children:"Hinzuf\xfcgen"}),Object(i.jsx)(Q,{onClick:function(n){n.preventDefault(),c([]),l([]),g(""),console.log(e)},children:"Zur\xfccksetzen"})]}),Object(i.jsxs)(X,{children:[Object(i.jsx)("p",{"data-tip":"Jede Option kann nur 1x ausgew\xe4hlt werden.",children:Object(i.jsxs)(Y,{children:[Object(i.jsx)(_,{id:"checkbox",type:"checkbox",onChange:function(n){y(n.currentTarget.checked)}}),Object(i.jsx)($,{htmlFor:"checkbox"})]})}),Object(i.jsx)(Z,{children:"KO-Mode"})]})]}),Object(i.jsx)(nn,{}),e.map((function(n){return Object(i.jsx)(W,{children:Object(i.jsx)(w,{option:n,onDeleteClick:C,isActive:h===n})},"option")})),Object(i.jsx)(nn,{}),Object(i.jsx)(nn,{}),e.length>0&&Object(i.jsx)(U,{onClick:function(){var n=Math.floor(Math.random()*e.length),t=e[n];l([t].concat(Object(u.a)(p))),g(t),m&&C(t)},children:"Entscheiden"}),Object(i.jsx)(nn,{}),p.length>0&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(q,{children:"Entscheidung"}),Object(i.jsx)("img",{src:k,height:"15px",alt:"arrowIcon"}),Object(i.jsx)(nn,{}),h&&""!==h&&Object(i.jsx)(W,{children:Object(i.jsx)(x,{decision:h})}),Object(i.jsx)(Z,{children:"Letzte 5 Entscheidungen"}),z.map((function(n){return Object(i.jsx)(W,{children:Object(i.jsx)(w,{option:n})},n)}))]}),Object(i.jsx)(nn,{}),Object(i.jsx)(nn,{}),Object(i.jsx)(nn,{}),Object(i.jsx)(nn,{}),Object(i.jsxs)(tn,{children:["Made by Niko Kottre - 2021 \xa9 -"," ",Object(i.jsx)("a",{href:"https://xtheon.com",children:"www.xtheon.com"})]}),Object(i.jsx)(s.a,{place:"bottom",type:"light",effect:"solid",multiline:!0})]})})},rn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),i(n),r(n),o(n),c(n)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(en,{})}),document.getElementById("root")),rn()}},[[29,1,2]]]);
//# sourceMappingURL=main.c94a0004.chunk.js.map
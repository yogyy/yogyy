import{r as f}from"./index.ed373d49.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=f,c=Symbol.for("react.element"),x=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(t,e,a){var r,o={},l=null,i=null;a!==void 0&&(l=""+a),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)_.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:l,ref:i,props:o,_owner:y.current}}s.Fragment=x;s.jsx=m;s.jsxs=m;p.exports=s;var n=p.exports;const v=[{name:"home",link:"yogyy.vercel.app"},{name:"blog",link:"yogyy.vercel.app/posts"},{name:"guestbook",link:"burungbiru.vercel.app"}];function h(){return n.jsx("nav",{className:"text-sm font-medium mt-8 mb-16 w-fit",children:n.jsx("ul",{className:"flex flex-row gap-3",children:v.map((t,e)=>n.jsx("li",{children:n.jsxs("a",{className:"relative",href:`https://${t.link}`,target:"_blank",children:[t.name,e===0&&n.jsx("div",{class:"absolute h-[1px] top-5 inset-0 bg-gradient-to-r from-transparent to-white w-full"})]})},t.name))})})}export{h as default};

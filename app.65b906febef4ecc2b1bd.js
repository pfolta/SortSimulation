!function(){"use strict";var e,r,t={366:function(e,r,t){var n=t(7294),o=t(3935),a=t(3253),i=t.n(a),l=(t(1249),t(405)),c=t(3727),u=t(5977),s=(t(7941),t(2526),t(9601),t(8509)),m=t(8268),d=t(6896),f=t(9163),p=(0,f.F4)(["from{transform:translateY(calc(100% + (100vh - 100%) / 2));}to{transform:translateY(0);}"]),b=(0,f.F4)(["from{transform:translateY(0);}to{transform:translateY(calc(100% + (100vh - 100%) / 2));}"]);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var g=250,y=(0,f.ZP)((function(e){var r=e.className,t=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["className"]);return n.createElement(i(),h({portalClassName:r,className:"".concat(r,"__Content"),overlayClassName:"".concat(r,"__Overlay")},t))})).attrs({closeTimeoutMS:g}).withConfig({displayName:"Modal__StyledReactModal",componentId:"sc-1yg086d-0"})(["&__Overlay{display:grid;place-items:end center;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2;@media (min-width:","){place-items:center;}&.ReactModal__Overlay--after-open{animation:"," ","ms ease-out forwards;}&.ReactModal__Overlay--before-close{animation:"," ","ms ease-in forwards;}}&__Content{display:grid;position:relative;background:",";box-shadow:0 0.5rem 2rem 0 rgba(0,0,0,0.75);border-radius:1rem 1rem 0 0;width:min(",",100vw);max-height:calc(100vh - ",");outline:none;overflow:hidden;@media (min-width:","){border-radius:1rem;}&.ReactModal__Content--after-open{animation:"," ","ms ease-out forwards;}&.ReactModal__Content--before-close{animation:"," ","ms ease-in forwards;}}"],(function(e){return e.theme.modal["max-width"]}),(function(e){var r,t=e.theme;return r=t.modal.overlay,(0,f.F4)(["from{background-color:inherit;}to{background-color:",";}"],r)}),g,(function(e){var r,t=e.theme;return r=t.modal.overlay,(0,f.F4)(["from{background-color:",";}to{background-color:inherit;}"],r)}),g,(function(e){var r=e.theme;return r.colors[r.modal.background]}),(function(e){return e.theme.modal["max-width"]}),(function(e){return e.theme.modal["margin-top"]}),(function(e){return e.theme.modal["max-width"]}),p,g,b,g),v=f.ZP.button.withConfig({displayName:"Modal__CloseButton",componentId:"sc-1yg086d-1"})(["all:unset;display:grid;padding:0.25rem;position:absolute;top:1rem;right:1rem;background-color:",";color:",";border-radius:0.25rem;:focus{box-shadow:",";}:hover{background-color:",";color:",";}:active{background-color:",";color:",";}"],(function(e){var r=e.theme;return r.colors[r.modal.close.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.color]}),(function(e){return e.theme.focus.boxShadow}),(function(e){var r=e.theme;return r.colors[r.modal.close.hover.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.hover.color]}),(function(e){var r=e.theme;return r.colors[r.modal.close.active.background]}),(function(e){var r=e.theme;return r.colors[r.modal.close.active.color]})),w=f.ZP.div.withConfig({displayName:"Modal__StyledModalBody",componentId:"sc-1yg086d-2"})(["overflow:auto;max-height:calc(100vh - ",");& > *{padding:",";}"],(function(e){return e.theme.modal["margin-top"]}),(function(e){return e.theme.modal.padding})),E=function(e){var r=e.children,t=e.isOpen,o=e.onClose,a=(0,d.Z)(),i=(0,n.useRef)(null);return n.createElement(y,{isOpen:t,onRequestClose:o,onAfterOpen:function(){return(0,s.Qp)(i.current)},onAfterClose:s.tP},n.createElement(v,{title:a.formatMessage({id:"close"}),onClick:o},n.createElement(m.Z,{size:20})),n.createElement(w,{ref:i},r))},k=(t(1817),t(1539),t(2165),t(8783),t(6992),t(3948),t(7042),t(8309),t(1038),t(49)),O=t(4012),A=f.ZP.div.withConfig({displayName:"ArrayView",componentId:"sc-75wn3y-0"})(["display:grid;grid-template-columns:repeat(",",1fr);align-items:end;height:30vh;"],(function(e){return e.array.length})),S=(t(6699),f.ZP.div.withConfig({shouldForwardProp:function(e){return["children","style"].includes(e)}}).withConfig({displayName:"ArrayViewElement",componentId:"sc-17cykbj-0"})(['transition:transform 100ms ease-out;:hover{transform:translateY(-1rem);::before{content:"";position:absolute;top:0;left:0;right:0;bottom:-1rem;z-index:-1;}}'])),q=(0,f.ZP)(S).attrs((function(e){return{style:{backgroundPosition:(e.value-1)/(e.size-1)*100+"% 0%"}}})).withConfig({displayName:"ImageElement__StyledImageElement",componentId:"sc-194fbu7-0"})(['background-image:url("','");background-repeat:no-repeat;background-size:',"% 100%;height:100%;"],(function(e){return e.image}),(function(e){return 100*e.size})),x=function(e){return n.createElement(q,e)},j=(0,n.memo)(x),_=(t(2222),t(8699));function C(){return(C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var P=(0,f.ZP)(S).attrs((function(e){var r=e.value,t=e.maxValue;return{style:{fontSize:(e.contentWidth||0)/2+"px",height:r/t*100+"%"}}})).withConfig({displayName:"NumberElement__StyledNumberElement",componentId:"sc-12klxgm-0"})(["background-color:",";background-image:linear-gradient( to bottom,",","," );box-shadow:0 0 0 1px "," inset,0 0 0 2px "," inset;color:",";text-shadow:0 1px 0 ",";font-size:0;font-weight:bold;text-align:center;padding-top:0.2em;"],(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-base-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-top-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["background-bottom-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["border-outside-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["border-inside-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["text-color-weight"])]}),(function(e){var r=e.color,t=e.theme;return t.colors["".concat(r,"-").concat(t["number-element"]["text-shadow-weight"])]})),I=f.ZP.span.withConfig({displayName:"NumberElement__StyledNumberElementLabel",componentId:"sc-12klxgm-1"})(["display:block;height:100%;overflow:hidden;"]),N=function(e){return n.createElement(_.Z,null,(function(r){var t,o=r.contentRect,a=r.measureRef;return n.createElement(P,C({ref:a},e,{contentWidth:null===(t=o.entry)||void 0===t?void 0:t.width}),n.createElement(I,null,e.value))}))},Z=(0,n.memo)(N),M=function(e){var r=e.array,t=e.image;return n.createElement(A,{array:r},r.map((function(e,o){return n.createElement(j,{key:o,value:e,size:r.length,image:t})})))},T=(0,n.memo)(M);function L(){return(L=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var V=(0,f.ZP)(A).withConfig({displayName:"NumberArrayView__StyledNumberArrayView",componentId:"sc-178tw0v-0"})(["column-gap:1px;"]),R=function(e){var r,t=e.array,o=e.colors,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["array","colors"]),i=Math.max.apply(Math,function(e){if(Array.isArray(e))return z(e)}(r=t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return n.createElement(V,{array:t},t.map((function(e,r){return n.createElement(Z,L({key:r,value:e,maxValue:i,color:o[r]},a))})))},U=(0,n.memo)(R),F=(t(9254),f.ZP.a.withConfig({displayName:"Link",componentId:"jbg31d-0"})(["color:",";cursor:pointer;:hover{text-decoration:none;}"],(function(e){var r=e.theme;return r.colors[r.link.color]}))),H=(0,f.ZP)(F).attrs({target:"_blank",rel:"noreferrer"}).withConfig({displayName:"Link__ExternalLink",componentId:"jbg31d-1"})([""]),D=f.ZP.h1.withConfig({displayName:"Typography__Title",componentId:"sc-1p8uj1t-0"})(["font-size:2rem;font-weight:bold;"]),J=f.ZP.h2.withConfig({displayName:"Typography__Heading",componentId:"sc-1p8uj1t-1"})(["font-size:1.5rem;font-weight:bold;margin-bottom:1rem;"]),Y=f.ZP.h3.withConfig({displayName:"Typography__SubHeading",componentId:"sc-1p8uj1t-2"})(["color:",";font-weight:bold;text-transform:uppercase;"],(function(e){var r=e.theme;return r.colors[r.typography.subheading.color]})),$=f.ZP.p.withConfig({displayName:"Typography__Paragraph",componentId:"sc-1p8uj1t-3"})(["margin-bottom:1rem;:last-child{margin-bottom:0;}"]),W=t(4751);function B(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var G=window.matchMedia("(prefers-color-scheme: dark)"),Q=function(){var e,r,t=(e=(0,n.useState)(G.matches),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return B(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?B(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=t[0],a=t[1],i=function(e){return a(e.matches)};return(0,n.useEffect)((function(){return G.addEventListener("change",i),function(){return G.removeEventListener("change",i)}}),[]),o},X=function(){return(0,W.I0)()},K=W.v9,ee=JSON.parse('{"body":{"background":"black-500","color":"white-300"},"colors":{"black-100":"#666666","black-300":"#4d4d4d","black-500":"#333333","black-700":"#1a1a1a","black-900":"#000000","blue-100":"#8cd5ff","blue-300":"#64baff","blue-500":"#3689e6","blue-700":"#0d52bf","blue-900":"#002e99","gray-100":"#fafafa","gray-300":"#d4d4d4","gray-500":"#abacae","gray-700":"#7e8087","gray-900":"#555761","green-100":"#d1ff82","green-300":"#9bdb4d","green-500":"#68b723","green-700":"#3a9104","green-900":"#206b00","orange-100":"#ffc27d","orange-300":"#ffa154","orange-500":"#f37329","orange-700":"#cc3b02","orange-900":"#a62100","pink-100":"#fe9ab8","pink-300":"#f4679d","pink-500":"#de3e80","pink-700":"#bc245d","pink-900":"#910e38","purple-100":"#e4c6fa","purple-300":"#cd9ef7","purple-500":"#a56de2","purple-700":"#7239b3","purple-900":"#452981","red-100":"#ff8c82","red-300":"#ed5353","red-500":"#c6262e","red-700":"#a10705","red-900":"#7a0000","teal-100":"#89ffdd","teal-300":"#43d6b5","teal-500":"#28bca3","teal-700":"#0e9a83","teal-900":"#007367","white-100":"#ffffff","white-300":"#e5e5e5","white-500":"#cccccc","white-700":"#b2b2b2","white-900":"#999999","yellow-100":"#fff394","yellow-300":"#ffe16b","yellow-500":"#f9c440","yellow-700":"#d48e15","yellow-900":"#ad5f00"},"focus":{"boxShadow":"0 0 0 0.1875rem rgba(66, 153, 225, 0.5)"},"link":{"color":"blue-300"},"modal":{"background":"black-500","close":{"background":"black-300","color":"white-700","hover":{"background":"black-300","color":"white-300"},"active":{"background":"black-100","color":"white-300"}},"margin-top":"2rem","max-width":"45rem","overlay":"rgba(128, 128, 128, 0.5)","padding":"1rem"},"number-element":{"background-base-weight":900,"background-top-weight":700,"background-bottom-weight":900,"border-inside-weight":900,"border-outside-weight":300,"text-color-weight":100,"text-shadow-weight":900},"typography":{"subheading":{"color":"white-500"}}}'),re=JSON.parse('{"body":{"background":"white-100","color":"black-500"},"colors":{"black-100":"#666666","black-300":"#4d4d4d","black-500":"#333333","black-700":"#1a1a1a","black-900":"#000000","blue-100":"#8cd5ff","blue-300":"#64baff","blue-500":"#3689e6","blue-700":"#0d52bf","blue-900":"#002e99","gray-100":"#fafafa","gray-300":"#d4d4d4","gray-500":"#abacae","gray-700":"#7e8087","gray-900":"#555761","green-100":"#d1ff82","green-300":"#9bdb4d","green-500":"#68b723","green-700":"#3a9104","green-900":"#206b00","orange-100":"#ffc27d","orange-300":"#ffa154","orange-500":"#f37329","orange-700":"#cc3b02","orange-900":"#a62100","pink-100":"#fe9ab8","pink-300":"#f4679d","pink-500":"#de3e80","pink-700":"#bc245d","pink-900":"#910e38","purple-100":"#e4c6fa","purple-300":"#cd9ef7","purple-500":"#a56de2","purple-700":"#7239b3","purple-900":"#452981","red-100":"#ff8c82","red-300":"#ed5353","red-500":"#c6262e","red-700":"#a10705","red-900":"#7a0000","teal-100":"#89ffdd","teal-300":"#43d6b5","teal-500":"#28bca3","teal-700":"#0e9a83","teal-900":"#007367","white-100":"#ffffff","white-300":"#e5e5e5","white-500":"#cccccc","white-700":"#b2b2b2","white-900":"#999999","yellow-100":"#fff394","yellow-300":"#ffe16b","yellow-500":"#f9c440","yellow-700":"#d48e15","yellow-900":"#ad5f00"},"focus":{"boxShadow":"0 0 0 0.25rem rgba(66, 153, 225, 0.5)"},"link":{"color":"blue-700"},"modal":{"background":"white-100","close":{"background":"white-300","color":"black-100","hover":{"background":"white-300","color":"black-500"},"active":{"background":"white-500","color":"black-500"}},"margin-top":"2rem","max-width":"45rem","overlay":"rgba(0, 0, 0, 0.5)","padding":"1rem"},"number-element":{"background-base-weight":500,"background-top-weight":300,"background-bottom-weight":500,"border-inside-weight":300,"border-outside-weight":700,"text-color-weight":900,"text-shadow-weight":100},"typography":{"subheading":{"color":"black-100"}}}'),te=["blue","gray","green","orange","pink","purple","red","teal","yellow"],ne={dark:ee,light:re};function oe(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ae(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ie(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function le(e,r){if(e){if("string"==typeof e)return ce(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ce(e,r):void 0}}function ce(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t(3161),t(9653),t(4747),t(6535),t(9244),Array.almostSorted=function(e,r){return Array.sorted(e).chunked(r+1).flatMap((function(e){return e.shuffled()}))},Array.fewUnique=function(e,r){var t=Array.random(e).slice(0,r);return[].concat(oe(t),oe(Array.range(e-r).map((function(){return t.random()})))).shuffled()},Array.random=function(e){return Array.sorted(e).shuffled()},Array.range=function(e,r){return Array.isArray(e)?oe(e.keys()):void 0!==r?Array.from({length:r-e},(function(r,t){return e+t})):oe(Array(e).keys())},Array.reversed=function(e){return Array.sorted(e).reverse()},Array.sorted=function(e){return Array.range(1,e+1)},Array.prototype.chunked=function(e){var r=this;if(!Number.isInteger(e))throw new TypeError("size ".concat(e," must be an integer."));if(e<=0)throw new RangeError("size ".concat(e," must be greater than zero."));return Array.range(Math.ceil(this.length/e)).map((function(t,n){return r.slice(n*e,n*e+e)}))},Array.prototype.isSorted=function(){for(var e=1;e<this.length;e++)if(this[e-1]>this[e])return!1;return!0},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.shuffled=function(){for(var e=function(e){if(Array.isArray(e))return ie(e)}(t=this)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=e.length-1;r>0;r--)e.swap(r,Math.floor(Math.random()*(r+1)));var t;return e},Array.prototype.swap=function(e,r){var t=this;[e,r].forEach((function(e){if(!Number.isInteger(e))throw new TypeError("index ".concat(e," must be an integer."));if(e<0||e>=t.length)throw new RangeError("index ".concat(e," must be greater than zero and less than ").concat(t.length))}));var n=this[e];return this[e]=this[r],this[r]=n,this};var ue=function(){var e,r,t,o,a,i,l,c,u=(e=(0,n.useState)(Array.random(30)),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return t}}(e,r)||le(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],m=u[1];return t=!0,o=1e3,a=function(){return m((function(e){return e.shuffled()}))},i=(0,n.useRef)(),l=(0,n.useRef)(performance.now()),c=function e(r){var t=r-l.current;t>=o&&(a(t),l.current=r),i.current=requestAnimationFrame(e)},(0,n.useLayoutEffect)((function(){return t&&(i.current=requestAnimationFrame(c)),function(){i.current&&cancelAnimationFrame(i.current)}}),[t,o]),n.createElement("section",null,n.createElement(J,null,n.createElement(O.Z,{id:"about",values:{productName:"SortSimulation"}})),n.createElement($,null,n.createElement(O.Z,{id:"version",values:{version:"3.0.0"}})," (","5f2eef6",")",n.createElement("br",null),n.createElement(O.Z,{id:"copyright.all_rights_reserved"}),n.createElement("br",null),n.createElement(k.Ji,{value:1616801245991,dateStyle:"medium"})," ",n.createElement(k.qN,{value:1616801245991,timeZone:"UTC",timeZoneName:"short",hour:"numeric",minute:"numeric",second:"numeric"})),n.createElement($,null,n.createElement(H,{href:"https://github.com/pfolta/sortsimulation.git"},"GitHub"),","," ",n.createElement(H,{href:"https://github.com/pfolta/sortsimulation/issues"},"GitHub Issues")),n.createElement(U,{array:s,colors:Array.range(s).map((function(){return function(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||le(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(te).random()}))}))},se=function(){return n.createElement("section",null,n.createElement(J,null,n.createElement(O.Z,{id:"help"})),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo."),n.createElement($,null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusamus officiis, rem pariatur repellendus explicabo a similique ab numquam consequatur quibusdam ad, id eaque. Aperiam culpa recusandae qui labore quo.XYZ"))},me=function(){return n.createElement("section",null,n.createElement(J,null,n.createElement(O.Z,{id:"settings"})),n.createElement(Y,null,n.createElement(O.Z,{id:"preview"})))},de=function(){var e=(0,u.k6)(),r=(0,u.TH)(),t=function(){return e.push("/")};return n.createElement(n.Fragment,null,n.createElement(E,{onClose:t,isOpen:"/about"===r.pathname},n.createElement(ue,null)),n.createElement(E,{onClose:t,isOpen:"/help"===r.pathname},n.createElement(se,null)),n.createElement(E,{onClose:t,isOpen:"/settings"===r.pathname},n.createElement(me,null)))},fe=(t(9720),t(9826),t(6755),t(3123),t(4916),t(7327),t(5003),t(9337),JSON.parse('{"about":"Über {productName}","close":"Schließen","copyright.all_rights_reserved":"Alle Rechte vorbehalten.","help":"Hilfe","preview":"Vorschau","settings":"Einstellungen","version":"Version {version}","welcome.title":"Willkommen bei SortSimulation"}')),pe=JSON.parse('{"about":"About {productName}","close":"Close","copyright.all_rights_reserved":"All rights reserved.","help":"Help","preview":"Preview","settings":"Settings","version":"Version {version}","welcome.title":"Welcome to SortSimulation"}');function be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function he(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?be(Object(t),!0).forEach((function(r){ge(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ge(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ye,ve,we={"en-US":{language:"English",locale:"en-US",messages:pe},"de-DE":{language:"Deutsch",locale:"de-DE",messages:he(he({},pe),fe)}},Ee=t(7407),ke={locale:(ye=navigator.languages||[navigator.language],ve=Object.keys(we),ye.map((function(e){var r=ve.find((function(r){return r.toLowerCase()===e.toLowerCase()})),t=ve.find((function(r){return r.toLowerCase().startsWith(e.toLowerCase().split(/[-_]/)[0])}));return r||t})).find((function(e){return void 0!==e}))||"en-US"),theme:"light"},Oe=(0,Ee.oM)({name:"settings",initialState:ke,reducers:{setLocale:function(e,r){e.locale=r.payload},setTheme:function(e,r){e.theme=r.payload},toggleTheme:function(e){e.theme=ne[e.theme]===ne.dark?"light":"dark"}}}),Ae=Oe.reducer,Se=Oe.actions,qe=Se.setLocale,xe=Se.setTheme,je=Se.toggleTheme,_e=(0,Ee.xC)({reducer:{settings:Ae}});function Ce(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var Pe,Ie=f.ZP.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"tii99s-0"})(["background-color:#e5e9f0;color:#4c566a;font-size:0.875rem;padding:1rem;"]),Ne=function(){var e=K((function(e){return e.settings})).locale,r=X();return n.createElement(Ie,null,"© Peter Folta. ",n.createElement(O.Z,{id:"copyright.all_rights_reserved"}),n.createElement("br",null),n.createElement("select",{value:e,onChange:function(e){return r(qe(e.target.value))}},Object.entries(we).sort().map((function(e){var r,t,o=(t=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return t}}(r,t)||function(e,r){if(e){if("string"==typeof e)return Ce(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ce(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return n.createElement("option",{key:a,value:a},i.language)}))))},Ze=t(8231),Me=t(2549),Te=t(7662),Le=t(6103),ze=f.ZP.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1hs4np2-0"})(["background-color:peachpuff;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:1;"]),Ve=f.ZP.ul.withConfig({displayName:"Header__Controls",componentId:"sc-1hs4np2-1"})(["display:flex;"]),Re=f.ZP.li.withConfig({displayName:"Header__Control",componentId:"sc-1hs4np2-2"})(["list-style-type:none;"]),Ue=f.ZP.button.withConfig({displayName:"Header__Button",componentId:"sc-1hs4np2-3"})(["background:none;color:#2e3440;border:none;border-radius:0.25rem;display:flex;padding:0.25rem;:hover{background-color:rgba(0,0,0,0.25);}"]),Fe=(0,f.ZP)(c.rU).withConfig({displayName:"Header__StyledLink",componentId:"sc-1hs4np2-4"})(["background:none;color:#2e3440;border:none;border-radius:0.25rem;cursor:default;display:flex;padding:0.25rem;:hover{background-color:rgba(0,0,0,0.25);}"]),He=function(){var e=K((function(e){return e.settings})).theme,r=X();return n.createElement(ze,null,n.createElement(D,null,"SortSimulation"),n.createElement(Ve,null,n.createElement(Re,null,n.createElement(Ue,{onClick:function(){return r(je())}},ne[e]===ne.dark?n.createElement(Ze.Z,null):n.createElement(Me.Z,null))),n.createElement(Re,null,n.createElement(Fe,{to:"/settings"},n.createElement(Te.Z,null))),n.createElement(Re,null,n.createElement(Ue,null,n.createElement(Le.Z,null)))))},De=t(9558),Je=function(e){var r=e.children,t=K((function(e){return e.settings})).locale,o=we[t];return n.createElement(De.Z,{locale:o.locale,messages:o.messages},n.createElement(l.q,{htmlAttributes:{lang:o.locale}}),r)},Ye=function(e){var r=e.children;return n.createElement(W.zt,{store:_e},r)};t(3371),t(9901);var $e,We,Be=(0,f.vJ)(Pe||($e=['\n    *, *::before, *::after {\n        box-sizing: border-box;\n\n        font: inherit;\n\n        margin: 0;\n        padding: 0;\n\n        cursor: default;\n        user-select: none;\n    }\n\n    html {\n        font: normal 100%/1.4 "Inter", sans-serif;\n    }\n\n    body {\n        background-color: ',";\n        color: ",";\n    }\n"],We||(We=$e.slice(0)),Pe=Object.freeze(Object.defineProperties($e,{raw:{value:Object.freeze(We)}}))),(function(e){var r=e.theme;return r.colors[r.body.background]}),(function(e){var r=e.theme;return r.colors[r.body.color]})),Ge=function(e){var r=e.children,t=K((function(e){return e.settings})).theme,o=Q(),a=X();return(0,n.useEffect)((function(){a(xe(o?"dark":"light"))}),[o,a]),n.createElement(f.f6,{theme:ne[t]},n.createElement(Be,null),r)},Qe=t(8572),Xe=function(){var e=Array.random(25);return n.createElement(n.StrictMode,null,n.createElement(Ye,null,n.createElement(l.B,null,n.createElement(Je,null,n.createElement(Ge,null,n.createElement(c.UT,null,n.createElement(He,null),n.createElement(T,{array:e,image:Qe}),n.createElement(U,{array:e,colors:Array.range(e).map((function(){return"gray"}))}),n.createElement(de,null),n.createElement(Ne,null)))))))},Ke=document.querySelector("#app");(0,a.setAppElement)(Ke),(0,o.render)(n.createElement(Xe,null),Ke)},8572:function(e,r,t){e.exports=t.p+"assets/image.c8a6c208be6217524a27.jpg"}},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={id:e,loaded:!1,exports:{}};return t[e](r,r.exports,o),r.loaded=!0,r.exports}o.m=t,o.x=function(){},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,{a:r}),r},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var a=Object.create(null);o.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var l=2&n&&t;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},o.d(a,i),a},o.d=function(e,r){for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",function(){var e={143:0},r=[[366,216]],t=function(){},n=function(n,a){for(var i,l,c=a[0],u=a[1],s=a[2],m=a[3],d=0,f=[];d<c.length;d++)l=c[d],o.o(e,l)&&e[l]&&f.push(e[l][0]),e[l]=0;for(i in u)o.o(u,i)&&(o.m[i]=u[i]);for(s&&s(o),n&&n(a);f.length;)f.shift()();return m&&r.push.apply(r,m),t()},a=self.webpackChunksortsimulation=self.webpackChunksortsimulation||[];function i(){for(var t,n=0;n<r.length;n++){for(var a=r[n],i=!0,l=1;l<a.length;l++){var c=a[l];0!==e[c]&&(i=!1)}i&&(r.splice(n--,1),t=o(o.s=a[0]))}return 0===r.length&&(o.x(),o.x=function(){}),t}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var l=o.x;o.x=function(){return o.x=l||function(){},(t=i)()}}(),o.x()}();
//# sourceMappingURL=app.65b906febef4ecc2b1bd.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{40:function(e,t,r){"use strict";r.d(t,"a",function(){return v});var n=r(21),a=r(7),o=r.n(a),i=r(0),l=r.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}var y=!1;try{y=!0}catch(e){}function b(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function d(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function v(e){var t=e.icon,r=e.mask,a=e.symbol,o=e.className,i=e.title,l=b(t),c=d("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,m=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),void 0!==u),s(t,"fa-rotate-".concat(f),void 0!==f),s(t,"fa-pull-".concat(p),void 0!==p),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map(function(e){return m[e]?e:null}).filter(function(e){return e})}(e)),p(o.split(" ")))),f=d("transform","string"==typeof e.transform?n.c.transform(e.transform):e.transform),m=d("mask",b(r)),O=Object(n.a)(l,u({},c,f,m,{symbol:a,title:i}));if(!O)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var g=O.abstract,E={};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(E[t]=e[t])}),h(g[0],E)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map(function(r){return e(t,r)}),o=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),a=m(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e},{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=f(n,["style"]);return o.attrs.style=u({},o.attrs.style,l),t.apply(void 0,[r.tag,u({},o.attrs,c)].concat(p(a)))}.bind(null,l.a.createElement)},71:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(40);function i(){return a.a.createElement(n.Fragment,null,a.a.createElement("h3",null,"Categories"),a.a.createElement("ul",{className:"pastry-categories"},a.a.createElement("li",null,a.a.createElement(o.a,{icon:"birthday-cake"}),"Cakes"),a.a.createElement("li",null,a.a.createElement(o.a,{icon:"chart-pie"}),"Cupcakes"),a.a.createElement("li",null,a.a.createElement(o.a,{icon:"cookie-bite"}),"Cookies"),a.a.createElement("li",null,a.a.createElement(o.a,{icon:"bread-slice"}),"Bread"),a.a.createElement("li",null,a.a.createElement(o.a,{icon:"candy-cane"}),"Others")))}var l=[{productName:"Velvet Cake",price:12,category:"Cake",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id",image:"/images/assets/redcake1.png"}],c=function(e){for(var t=0;t<5;t++)e=e.concat(e[0]);return e.map(function(e,t){return a.a.createElement("div",{key:t,className:"pastry-product-box"},a.a.createElement("div",{className:"pastry-product-wrapper"}," ",a.a.createElement("img",{src:e.image,alt:"cake"}),a.a.createElement("div",{className:"pastry-product-hidden-caption"},a.a.createElement("h5",null,e.productName),a.a.createElement("p",null,e.description),a.a.createElement("button",{className:"cta-defaults"},"view item"))))})};function s(){return a.a.createElement(n.Fragment,null,a.a.createElement("h3",null,"Product Placeholder"),a.a.createElement("div",{className:"pastry-content-products"},c(l)))}function u(){return a.a.createElement("section",{className:"pastry-hero"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"pastry-hero-caption"},a.a.createElement("h1",null,"Our Pastries"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.")),a.a.createElement("span",{className:"chef-ok-image"})))}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){return a.a.createElement("section",{className:"pastries"},a.a.createElement(u,null),a.a.createElement("div",{className:"container"},a.a.createElement("aside",{className:"pastry-search-section"},a.a.createElement(i,null)),a.a.createElement("div",{className:"pastry-content"},a.a.createElement(s,null))))}}])&&p(r.prototype,o),l&&p(r,l),t}();t.default=d}}]);
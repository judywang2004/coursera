define("bundles/phoenix/components/Tex",["require","exports","module","react-with-addons","react-dom","js/lib/coursera.mathjax"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(i,c,l){var r=!0;e:for(;r;){var t=i,u=c,a=l;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,u);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,c=u,l=a,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(a)}},e=require("react-with-addons"),t=require("react-dom"),r=require("js/lib/coursera.mathjax");module.exports=function(i){function Tex(){_classCallCheck(this,Tex),o(Object.getPrototypeOf(Tex.prototype),"constructor",this).apply(this,arguments)}return _inherits(Tex,i),n(Tex,[{key:"componentDidMount",value:function componentDidMount(){r.render(t.findDOMNode(this))}},{key:"componentDidUpdate",value:function componentDidUpdate(){r.render(t.findDOMNode(this))}},{key:"render",value:function render(){var t=this.props.children;return e.isValidElement(t)?t:e.createElement("span",null,t)}}]),Tex}(e.Component)});
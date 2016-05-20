define("bundles/ondemand/components/CourseHeader",["require","exports","module","react-with-addons","bundles/catalogP/models/partners","bundles/ondemand/components/PartnerLogo"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),r=function get(i,c,s){var r=!0;e:for(;r;){var t=i,a=c,u=s;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,c=a,s=u,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(u)}},e=require("react-with-addons"),n=require("bundles/catalogP/models/partners"),o=require("bundles/ondemand/components/PartnerLogo"),i=function(i){function CourseHeader(){_classCallCheck(this,CourseHeader),r(Object.getPrototypeOf(CourseHeader.prototype),"constructor",this).apply(this,arguments)}return _inherits(CourseHeader,i),t(CourseHeader,[{key:"render",value:function render(){return e.createElement("div",{className:"rc-CourseHeader"},e.createElement("div",{className:"align-horizontal-center od-dark od-container cozy"},1===this.props.universities.length&&this.props.thumbnail&&e.createElement(o,this.props)))}}],[{key:"propTypes",value:{thumbnail:e.PropTypes.string,universities:e.PropTypes.instanceOf(n).isRequired},enumerable:!0}]),CourseHeader}(e.Component);module.exports=i});
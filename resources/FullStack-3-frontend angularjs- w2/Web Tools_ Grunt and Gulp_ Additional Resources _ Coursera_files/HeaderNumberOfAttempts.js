define("bundles/assess/components/HeaderNumberOfAttempts",["require","exports","module","react-with-addons","i18n!nls/assess","js/lib/coursera.react-intl"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),r=function get(i,a,p){var r=!0;e:for(;r;){var t=i,s=a,u=p;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,s);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,a=s,p=u,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(u)}},e=require("react-with-addons"),n=require("i18n!nls/assess"),o=require("js/lib/coursera.react-intl"),i=o.FormattedMessage,s=function(o){function HeaderNumberOfAttempts(){_classCallCheck(this,HeaderNumberOfAttempts),r(Object.getPrototypeOf(HeaderNumberOfAttempts.prototype),"constructor",this).apply(this,arguments)}return _inherits(HeaderNumberOfAttempts,o),t(HeaderNumberOfAttempts,[{key:"render",value:function render(){return e.createElement(i,{message:n("You have {numberOfAttempts}\n          {numberOfAttempts, plural, =1 {attempt} other {attempts}}\n          every {interval}."),numberOfAttempts:this.props.numberOfAttempts,interval:this.props.interval})}}],[{key:"propTypes",value:{numberOfAttempts:e.PropTypes.number.isRequired,interval:e.PropTypes.string.isRequired},enumerable:!0}]),HeaderNumberOfAttempts}(e.Component);module.exports=s});
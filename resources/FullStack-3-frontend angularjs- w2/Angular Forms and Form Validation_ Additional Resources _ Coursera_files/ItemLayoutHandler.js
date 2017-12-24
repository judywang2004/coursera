define("bundles/ondemand/components/ItemLayoutHandler",["require","exports","module","underscore","react-with-addons","./ItemLayout","bundles/phoenix/lib/waitForStores"],function(require,exports,module){"use strict";function _defaults(e,n){for(var i=Object.getOwnPropertyNames(n),r=0;r<i.length;r++){var t=i[r],o=Object.getOwnPropertyDescriptor(n,t);o&&o.configurable&&void 0===e[t]&&Object.defineProperty(e,t,o)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var t=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},o=function(){function defineProperties(o,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,r,t){return r&&defineProperties(e.prototype,r),t&&defineProperties(e,t),e}}(),n=function get(i,a,c){var t=!0;e:for(;t;){var r=i,s=a,u=c;t=!1,null===r&&(r=Function.prototype);var e=Object.getOwnPropertyDescriptor(r,s);if(void 0===e){var o=Object.getPrototypeOf(r);if(null===o)return void 0;i=o,a=s,c=u,t=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(u)}},_=require("underscore"),e=require("react-with-addons"),i=require("./ItemLayout"),s=require("bundles/phoenix/lib/waitForStores"),r=function(r){function ItemLayoutHandler(){_classCallCheck(this,ItemLayoutHandler),n(Object.getPrototypeOf(ItemLayoutHandler.prototype),"constructor",this).apply(this,arguments)}return _inherits(ItemLayoutHandler,r),o(ItemLayoutHandler,[{key:"render",value:function render(){var o=this.props.courseMaterials,r=o.getItemMetadata(this.context.router.params.item_id);return e.createElement(i,null,this.props.children&&e.cloneElement(this.props.children,t({},_(this.props).omit("children"),{itemMetadata:r,key:r.getId()})))}}],[{key:"propTypes",value:{courseMaterials:e.PropTypes.object.isRequired,course:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired,children:e.PropTypes.element},enumerable:!0},{key:"contextTypes",value:{router:e.PropTypes.object.isRequired},enumerable:!0}]),ItemLayoutHandler}(e.Component);module.exports=s(r,["CourseStore","ProgressStore"],function(e){var r=e.CourseStore,t=e.ProgressStore;return{courseMaterials:r.getMaterials(),course:r.getMetadata(),courseProgress:t.courseProgress}}),module.exports.BaseComp=r});
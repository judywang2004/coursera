define("bundles/facilitated-cdp/components/HowYoullLearnSection",["require","exports","module","react-with-addons","./GetHelpBanner","./how-youll-learn/Features","./how-youll-learn/MentorBox","bundles/facilitated-cdp/models/FacilitatedGroup","bundles/facilitated-cdp/models/FakeCourseData","css!./__styles__/HowYoullLearnSection"],function(require,exports,module){"use strict";function _defaults(e,n){for(var a=Object.getOwnPropertyNames(n),t=0;t<a.length;t++){var r=a[t],o=Object.getOwnPropertyDescriptor(n,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(a,c,u){var r=!0;e:for(;r;){var t=a,l=c,i=u;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,l);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;a=o,c=l,u=i,r=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(i)}},e=require("react-with-addons"),t=require("./GetHelpBanner"),n=require("./how-youll-learn/Features"),a=require("./how-youll-learn/MentorBox"),l=require("bundles/facilitated-cdp/models/FacilitatedGroup"),i=require("bundles/facilitated-cdp/models/FakeCourseData");require("css!./__styles__/HowYoullLearnSection");var c=function(c){function HowYoullLearnSection(){_classCallCheck(this,HowYoullLearnSection),o(Object.getPrototypeOf(HowYoullLearnSection.prototype),"constructor",this).apply(this,arguments)}return _inherits(HowYoullLearnSection,c),r(HowYoullLearnSection,[{key:"render",value:function render(){var r=this.props,c=r.facilitatedGroups,u=r.fakeCourseData,o=c[0].facilitators[0],l=u.getExtraMentorData(o.id),i=l.valueProp;return e.createElement("div",{className:"rc-HowYoullLearnSection"},e.createElement("div",{className:"mentor-card card-no-action"},e.createElement("div",{className:"rc-MentorHeader"},e.createElement("h4",{className:"title headline-4-text"},i.title),e.createElement("div",{className:"description"},i.description)),e.createElement(a,{mentor:o,extraMentorData:l}),e.createElement(n,null)),e.createElement(t,null))}}],[{key:"propTypes",value:{fakeCourseData:e.PropTypes.instanceOf(i).isRequired,facilitatedGroups:e.PropTypes.arrayOf(e.PropTypes.instanceOf(l)).isRequired},enumerable:!0}]),HowYoullLearnSection}(e.Component);module.exports=c});
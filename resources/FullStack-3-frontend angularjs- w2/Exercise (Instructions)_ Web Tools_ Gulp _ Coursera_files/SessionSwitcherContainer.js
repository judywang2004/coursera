define("bundles/discussions/components/sessionSwitcher/SessionSwitcherContainer",["require","exports","module","underscore","react-with-addons","vendor/cnpm/fluxible.v0-4/addons/connectToStores","bundles/discussions/components/sessionSwitcher/SessionSwitcher","bundles/phoenix/template/models/userAuthorization","js/lib/connectToRouter","bundles/common/constants/CourseRoles"],function(require,exports,module){"use strict";function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),o=0;o<s.length;o++){var t=s[o],n=Object.getOwnPropertyDescriptor(r,t);n&&n.configurable&&void 0===e[t]&&Object.defineProperty(e,t,n)}return e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _inherits(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):_defaults(o,e))}var n=function(){function defineProperties(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,o,t){return o&&defineProperties(e.prototype,o),t&&defineProperties(e,t),e}}(),r=function get(s,c,a){var t=!0;e:for(;t;){var o=s,i=c,u=a;t=!1,null===o&&(o=Function.prototype);var e=Object.getOwnPropertyDescriptor(o,i);if(void 0===e){var n=Object.getPrototypeOf(o);if(null===n)return void 0;s=n,c=i,a=u,t=!0,e=n=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(u)}},s=require("underscore"),i=s.compose,e=require("react-with-addons"),u=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),t=require("bundles/discussions/components/sessionSwitcher/SessionSwitcher"),c=require("bundles/phoenix/template/models/userAuthorization"),a=require("js/lib/connectToRouter"),o=require("bundles/common/constants/CourseRoles"),p=o.DATA_COORDINATOR,l=o.INSTRUCTOR,d=o.MENTOR,f=o.TEACHING_STAFF,b=o.UNIVERSITY_ADMIN,h=function(o){function SessionSwitcherContainer(){_classCallCheck(this,SessionSwitcherContainer),r(Object.getPrototypeOf(SessionSwitcherContainer.prototype),"constructor",this).apply(this,arguments)}return _inherits(SessionSwitcherContainer,o),n(SessionSwitcherContainer,[{key:"render",value:function render(){if(!this.props.authorized||!this.props.onDiscussionsPage)return!1;return e.createElement(t,{courseId:this.props.courseId})}}],[{key:"propTypes",value:{onDiscussionsPage:e.PropTypes.bool.isRequired,courseId:e.PropTypes.string,authorized:e.PropTypes.bool},enumerable:!0}]),SessionSwitcherContainer}(e.Component);module.exports=i(a(function(o){var e=o.location.pathname.split("/");return{onDiscussionsPage:"discussions"===e[e.length-1]}}),u(["CourseMembershipStore"],function(e,t){var o=e.CourseMembershipStore;return{authorized:[p,l,d,f,b].indexOf(o.getCourseRole())>=0||c.isSuperuser()}}))(h)});
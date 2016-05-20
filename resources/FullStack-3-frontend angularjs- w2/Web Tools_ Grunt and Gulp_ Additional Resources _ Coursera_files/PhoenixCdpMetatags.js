define("bundles/phoenix-cdp/components/sections-subcomponents/PhoenixCdpMetatags",["require","exports","module","naptime","react-with-addons","underscore","bundles/naptimejs/resources/courseDerivatives.v1","bundles/naptimejs/resources/courses.v1","bundles/naptimejs/resources/partners.v1","bundles/page/lib/metatagsAddressBookSsr"],function(require,exports,module){"use strict";function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),r=0;r<s.length;r++){var t=s[r],o=Object.getOwnPropertyDescriptor(n,t);o&&o.configurable&&void 0===e[t]&&Object.defineProperty(e,t,o)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var n=function(){function defineProperties(o,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,r,t){return r&&defineProperties(e.prototype,r),t&&defineProperties(e,t),e}}(),s=function get(s,a,c){var t=!0;e:for(;t;){var r=s,i=a,u=c;t=!1,null===r&&(r=Function.prototype);var e=Object.getOwnPropertyDescriptor(r,i);if(void 0===e){var o=Object.getPrototypeOf(r);if(null===o)return void 0;s=o,a=i,c=u,t=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(u)}},i=require("naptime"),e=require("react-with-addons"),_=require("underscore"),o=require("bundles/naptimejs/resources/courseDerivatives.v1"),r=require("bundles/naptimejs/resources/courses.v1"),u=require("bundles/naptimejs/resources/partners.v1"),a=require("bundles/page/lib/metatagsAddressBookSsr"),c=function(t){function PhoenixCdpMetatags(){_classCallCheck(this,PhoenixCdpMetatags),s(Object.getPrototypeOf(PhoenixCdpMetatags.prototype),"constructor",this).apply(this,arguments)}return _inherits(PhoenixCdpMetatags,t),n(PhoenixCdpMetatags,[{key:"setMetatags",value:function setMetatags(){var r=this.props,e=r.course,t=r.partners;a.setMetatags({pageName:"open-course-welcome",context:{courseName:e.name,partnerNames:_(t).pluck("name").join(", "),courseDescription:e.description},options:{imageHref:e.photoUrl}})}},{key:"render",value:function render(){var r=this.props,t=r.course,o=r.partners;return"undefined"!=typeof window&&t&&o&&this.setMetatags(),e.createElement("div",{className:"rc-PhoenixCdpMetatags"})}}],[{key:"propTypes",value:{course:e.PropTypes.instanceOf(r).isRequired,partners:e.PropTypes.arrayOf(e.PropTypes.instanceOf(u)).isRequired,keywords:e.PropTypes.arrayOf(e.PropTypes.string).isRequired},enumerable:!0}]),PhoenixCdpMetatags}(e.Component),t=i.createContainer(c,function(e){return{partners:e.course&&e.course.partnerIds&&u.multiGet(e.course.partnerIds)||void 0}}),p=function(i){function PhoenixCdpMetatagsCourses(){_classCallCheck(this,PhoenixCdpMetatagsCourses),s(Object.getPrototypeOf(PhoenixCdpMetatagsCourses.prototype),"constructor",this).apply(this,arguments)}return _inherits(PhoenixCdpMetatagsCourses,i),n(PhoenixCdpMetatagsCourses,[{key:"render",value:function render(){var r=this.props,o=r.course,n=r.courseDerivativesList;return e.createElement(t,{course:o,keywords:n[0].keywords||[]})}}],[{key:"propTypes",value:{course:e.PropTypes.instanceOf(r).isRequired,courseDerivativesList:e.PropTypes.arrayOf(e.PropTypes.instanceOf(o)).isRequired},enumerable:!0}]),PhoenixCdpMetatagsCourses}(e.Component);module.exports=i.createContainer(p,function(e){return{course:r.get(e.courseId,{fields:["name","photoUrl","description","partnerIds"],subcomponents:[t]}),courseDerivativesList:o.multiGet([e.courseId],{fields:["keywords"],subcomponents:[t]})}})});
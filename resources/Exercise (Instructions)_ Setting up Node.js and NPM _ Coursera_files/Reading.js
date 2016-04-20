define("bundles/ondemand/components/reading/Reading",["require","exports","module","react-with-addons","bundles/phoenix/components/CML","bundles/CMLConverter/CMLVariableNames","bundles/ondemand/actions/ProgressActions","bundles/phoenix/lib/waitForStores","bundles/phoenix/template/models/userIdentity","pages/open-course/common/models/itemMetadata","pages/open-course/common/constants","pages/open-course/supplement/utils/supplementProgressApi"],function(require,exports,module){"use strict";function _defaults(e,o){for(var s=Object.getOwnPropertyNames(o),t=0;t<s.length;t++){var n=s[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var u=function(){function defineProperties(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(s,u,p){var n=!0;e:for(;n;){var t=s,a=u,i=p;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var r=Object.getPrototypeOf(t);if(null===r)return void 0;s=r,u=a,p=i,n=!0,e=r=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},e=require("react-with-addons"),s=require("bundles/phoenix/components/CML"),n=require("bundles/CMLConverter/CMLVariableNames"),r=require("bundles/ondemand/actions/ProgressActions"),a=r.updateProgress,i=require("bundles/phoenix/lib/waitForStores"),t=require("bundles/phoenix/template/models/userIdentity"),p=require("pages/open-course/common/models/itemMetadata"),l=require("pages/open-course/common/constants"),c=require("pages/open-course/supplement/utils/supplementProgressApi"),d="supplement_link_tracking",m=function(r){function Reading(){_classCallCheck(this,Reading),o(Object.getPrototypeOf(Reading.prototype),"constructor",this).apply(this,arguments)}return _inherits(Reading,r),u(Reading,[{key:"componentDidMount",value:function componentDidMount(){this.markComplete()}},{key:"getVariableData",value:function getVariableData(){var e;return e={},_defineProperty(e,n.NAME,t.get("full_name")),_defineProperty(e,n.USER_ID,t.get("id")),e}},{key:"getLinkEventingData",value:function getLinkEventingData(){return{key:d,value:{course_slug:this.props.itemMetadata.get("course.slug"),user_id:t.get("id"),timestamp:Date.now()}}}},{key:"markComplete",value:function markComplete(){var e=this.props,t=e.courseProgress,o=e.itemMetadata,n=o.getId(),r=t.getItemProgress(n);r.isComplete()||c.markComplete(n).then(function(){r.setState(l.progressCompleted,{refreshCourseProgress:!0}),this.context.executeAction(a,t)}.bind(this)).done()}},{key:"render",value:function render(){return e.createElement(s,{cml:this.props.readingCml,variableData:this.getVariableData(),linkEventingData:this.getLinkEventingData(),shouldRenderMath:!0,shouldApplyStyles:!0,className:"rc-Reading"})}}],[{key:"propTypes",value:{itemMetadata:e.PropTypes.instanceOf(p).isRequired,readingCml:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired},enumerable:!0},{key:"contextTypes",value:{executeAction:e.PropTypes.func.isRequired},enumerable:!0}]),Reading}(e.Component);module.exports=i(m,["ProgressStore"],function(e,n){var t=e.ProgressStore;return{courseProgress:t.courseProgress}})});
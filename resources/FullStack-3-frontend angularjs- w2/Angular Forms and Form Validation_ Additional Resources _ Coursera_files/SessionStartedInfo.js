define("bundles/ondemand/components/sessions/SessionStartedInfo",["require","exports","module","jsuri","q","react-router","react-with-addons","bundles/page/components/TrackedButton","bundles/phoenix/lib/apiWrapper","bundles/certificate-enroll/components/EnrolledWithoutCertBody","bundles/iconfont/Icon","bundles/ondemand/stores/SessionStore","bundles/ondemand/utils/url","pages/open-course/common/models/course","js/lib/coursera.react-intl","js/lib/coursera.redirect","i18n!nls/ondemand","css!./__styles__/SessionStartedInfo"],function(require,exports,module){"use strict";function _defaults(e,o){for(var s=Object.getOwnPropertyNames(o),t=0;t<s.length;t++){var r=s[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var m=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),b=function get(s,l,c){var r=!0;e:for(;r;){var t=s,a=l,i=c;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;s=n,l=a,c=i,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},f=require("jsuri"),y=require("q"),v=require("react-router"),S=v.Navigation,e=require("react-with-addons"),c=require("bundles/page/components/TrackedButton"),u=require("bundles/phoenix/lib/apiWrapper"),p=require("bundles/certificate-enroll/components/EnrolledWithoutCertBody"),n=require("bundles/iconfont/Icon"),o=require("bundles/ondemand/stores/SessionStore"),d=require("bundles/ondemand/utils/url"),r=d.getHomeUrl,s=require("pages/open-course/common/models/course"),a=require("js/lib/coursera.react-intl"),i=a.FormattedMessage,h=a.FormattedNumber,g=require("js/lib/coursera.redirect"),t=require("i18n!nls/ondemand");require("css!./__styles__/SessionStartedInfo");var P=u("/api/onDemandSessionMemberships.v1",{type:"rest"}),l=e.createClass({displayName:"DetailedSessionStartedInfo",contextTypes:{router:e.PropTypes.object.isRequired},propTypes:{inItemPage:e.PropTypes.bool,justEnrolled:e.PropTypes.bool,numLearners:e.PropTypes.number.isRequired,course:e.PropTypes.instanceOf(s).isRequired,handleClose:e.PropTypes.func},componentWillMount:function componentWillMount(){var e=this,t=(new f).addQueryParam("courseId",this.props.course.get("id")).addQueryParam("q","bySession").addQueryParam("sessionId",o.getSessionId()).addQueryParam("limit",1);y(P.get(t.toString())).then(function(t){e.setState({numLearners:t.paging.total})}).done()},handleConfirmation:function handleConfirmation(){this.props.inItemPage||(this.props.justEnrolled?g.setPathname(r()):this.context.router.replace(r())),this.props.handleClose&&this.props.handleClose()},render:function render(){var r=this.props,s=r.inItemPage,a=r.course;return e.createElement("div",{className:"rc-SessionStartedInfo"},e.createElement("h3",{className:"title"},e.createElement(i,{message:t("Welcome to {courseName}!"),courseName:a.get("name")})),e.createElement("div",{className:"horizontal-box align-items-vertical-center text-block"},e.createElement(n,{name:"home",className:"c-nav-icon color-primary-text"}),e.createElement("div",null,e.createElement("p",{className:"body-2-text"},t("Check out your progress in Home.")),e.createElement("p",null,t("Keep up with the course by checking your progress in the Home tab.")))),e.createElement("div",{className:"horizontal-box align-items-vertical-center text-block"},e.createElement(n,{name:"discussions",className:"c-nav-icon color-primary-text"}),e.createElement("div",null,e.createElement("p",{className:"body-2-text"},t("Introduce yourself in the Discussion forums.")),e.createElement("p",null,e.createElement(i,{message:t("Say hello to the other {numLearners} learners taking this course."),numLearners:this.props.numLearners?e.createElement(h,{value:this.state.numLearners}):""})))),e.createElement("div",{className:"cta-button horizontal-box align-items-right wrap"},e.createElement(c,{trackingName:"session_started_modal_confirm",data:{ondemandSessionId:o.getSessionId()},className:"primary",type:"submit",onClick:this.handleConfirmation},t(s?"Continue":"Get started"))))}}),E=function(t){function SessionStartedInfo(){_classCallCheck(this,SessionStartedInfo),b(Object.getPrototypeOf(SessionStartedInfo.prototype),"constructor",this).apply(this,arguments)}return _inherits(SessionStartedInfo,t),m(SessionStartedInfo,[{key:"render",value:function render(){var t=this.props,n=t.inItemPage,o=t.justEnrolled,s=t.course;return o&&!n?e.createElement(p,{course:s,startLearningLink:r()}):e.createElement(l,this.props)}}],[{key:"propTypes",value:{inItemPage:e.PropTypes.bool,justEnrolled:e.PropTypes.bool,numLearners:e.PropTypes.number.isRequired,course:e.PropTypes.instanceOf(s).isRequired,handleClose:e.PropTypes.func},enumerable:!0}]),SessionStartedInfo}(e.Component);module.exports=E});
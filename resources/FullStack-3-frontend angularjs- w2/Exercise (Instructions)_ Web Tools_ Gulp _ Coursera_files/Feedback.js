define("bundles/content-feedback/models/Feedback",["require","exports","module"],function(require,exports,module){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t=function(){function defineProperties(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),e=function(){function Feedback(t){var e=t.rating,n=t.comments,i=t.timestamp,r=t.context,o=t.debugInfo,s=t.categoryStates,u=t.id;_classCallCheck(this,Feedback),this.rating=e,this.comments=n,this.timestamp=i,this.context=r,this.debugInfo=o,this.categoryStates=s,this.id=u}return t(Feedback,[{key:"toObject",value:function toObject(){return{rating:this.rating,comments:this.comments}}},{key:"value",get:function get(){return this.rating.value}},{key:"isActive",get:function get(){return this.rating.active}},{key:"subItemId",get:function get(){return this.context&&this.context.definition.subItemId}},{key:"subItemTitle",get:function get(){return this.context&&this.context.definition.subItemTitle}}]),Feedback}();module.exports=e});
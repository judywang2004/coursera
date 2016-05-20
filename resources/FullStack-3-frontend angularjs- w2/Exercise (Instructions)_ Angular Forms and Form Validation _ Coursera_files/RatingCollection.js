define("bundles/content-feedback/models/RatingCollection",["require","exports","module","underscore","./RatingFeedback"],function(require,exports,module){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var e=function(){function defineProperties(i,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),_=require("underscore"),t=require("./RatingFeedback"),n=function(){function RatingCollection(){_classCallCheck(this,RatingCollection),this.models=[],this.page=0,this.totalCount=0}return e(RatingCollection,[{key:"isEmpty",value:function isEmpty(){return 0===this.models.length}},{key:"setTotalCount",value:function setTotalCount(e){this.totalCount=e}},{key:"appendPage",value:function appendPage(e){var n=this;_(e).each(function(e){var i=e.rating,o=e.timestamp,a=e.id,r=new t(i.value,i.active,e.comments.generic,o,a);n.models.push(r)}),this.page+=1}},{key:"length",get:function get(){return this.models.length}},{key:"hasPendingPage",get:function get(){return this.totalCount!==this.length}}]),RatingCollection}();module.exports=n});
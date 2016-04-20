define("pages/open-course/assessment/models/exam/evaluation",["require","exports","module","backbone-associations","pages/open-course/common/constants"],function(require,exports,module){"use strict";var Backbone=require("backbone-associations"),e=require("pages/open-course/common/constants"),t=Backbone.AssociatedModel.extend({defaults:{maxScore:1,score:0,sessionId:"",passingFraction:e.assessments.defaultPassingFraction},reset:function reset(){this.set(this.defaults)},isValid:function isValid(){return"number"==typeof this.get("score")&&"number"==typeof this.get("maxScore")&&"number"==typeof this.get("passingFraction")},getPercentScore:function getPercentScore(){return this.get("score")/this.get("maxScore")},getHumanPercentScore:function getHumanPercentScore(){return Math.floor(100*this.getPercentScore())},getDisplayScore:function getDisplayScore(){var e=this.get("score");return e%1===0?e:e.toFixed(1)},getMinimumPassingScore:function getMinimumPassingScore(){return Math.ceil(this.get("passingFraction")*this.get("maxScore"))},getDisplayPassingPercent:function getDisplayPassingPercent(){return Math.round(100*this.get("passingFraction"))+"%"},isPassed:function isPassed(){return this.get("score")>=this.get("maxScore")*this.get("passingFraction")}});module.exports=t});
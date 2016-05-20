define("bundles/assess/assessmentTypes/phoenixQuiz/assessment.attempt",["require","exports","module","jquery","underscore","bundles/assess/assessmentTypes/phoenixQuiz/assessment.attempt.html","bundles/assess/assessmentTypes/phoenixQuiz/assessment.header","bundles/assess/assessmentTypes/phoenixQuiz/common/sessionModel","bundles/ondemand/components/PremiumGradingQuizButton","bundles/assess/assessmentTypes/phoenixQuiz/openSinglePage/sessionModel","bundles/assess/framework/QuestionController","bundles/nprogress/coursera.nprogress.v0-1-3","bundles/phoenix/lib/view","js/app/config","js/lib/modals","js/lib/pluralizer","pages/open-course/item/views/verifiedCertificateBanner","bundles/content-feedback/components/ItemFeedback","bundles/content-feedback/constants/ItemTypes"],function(require,exports,module){"use strict";var $=require("jquery"),_=require("underscore"),o=require("bundles/assess/assessmentTypes/phoenixQuiz/assessment.attempt.html"),t=require("bundles/assess/assessmentTypes/phoenixQuiz/assessment.header"),l=require("bundles/assess/assessmentTypes/phoenixQuiz/common/sessionModel"),h=require("bundles/ondemand/components/PremiumGradingQuizButton"),p=require("bundles/assess/assessmentTypes/phoenixQuiz/openSinglePage/sessionModel"),a=require("bundles/assess/framework/QuestionController"),s=require("bundles/nprogress/coursera.nprogress.v0-1-3"),d=require("bundles/phoenix/lib/view"),n=require("js/app/config"),r=require("js/lib/modals"),u=require("js/lib/pluralizer"),i=require("pages/open-course/item/views/verifiedCertificateBanner"),m=require("bundles/content-feedback/components/ItemFeedback"),c=require("bundles/content-feedback/constants/ItemTypes"),e=function getMetadata(e){return function(){return this.metadata.get(e)}},b=d.extend({name:"body",multitracker:{namespace:"open_course.item_page.quiz",baseValues:["open_course_slug","module_id","module_name","lesson_id","lesson_name","item_id","item_name"],definitions:{open_course_slug:e("course.slug"),module_id:e("lesson.module.id"),module_name:e("lesson.module.name"),lesson_id:e("lesson.id"),lesson_name:e("lesson.name"),item_id:e("id"),item_name:e("name"),item_type:e("type")},events:{stay:'click [data-js~="stay-button"]',next:{delegate:'click [data-js~="next-button"]'},get_certified_upsell:'click [data-js~="get-certified-upsell"]'},eventingVersion:2},events:{'click [data-js~="submit-button"]':"submit",'click [data-js~="retake-button"]':"retake",'click [data-js~="close-button"]':"close",'click [data-js~="confirm-close-button"]':"confirmClose",'animationend [data-js~="state-attempt"]':"renderAndBindState"},initialize:function initialize(e){_.bindAll(this,"scrollToTop","showVcBanner","onBeforeUnload"),this.initializeOptions(e),this.initializeNeighbors(),this.initializeModels(),this.initializeEvents(),this.initializePluralizer()},initializePluralizer:function initializePluralizer(){this.pluralizer=new u(this.$el),this.pluralizer.setRules({"num-questions-unanswered":{model:this.model,property:"unansweredQuestions"}})},initializeOptions:function initializeOptions(e){this.onStateChange=e.onStateChange,this.metadata=e.itemMetadata,this.assessmentClient=e.assessmentClient,this.attemptIndex=e.attemptIndex,this.courseMaterials=e.courseMaterials,this.verificationDisplay=e.verificationDisplay,this.verifiableId=e.verifiableId||null},initializeNeighbors:function initializeNeighbors(){this.neighbors=this.courseMaterials.getNeighboringItemMetadata(this.metadata)},initializeModels:function initializeModels(){this.questionViews=[];var e=this.metadata.getTypeName();if("assessOpenSinglePage"===e)this.model=new p({attemptIndex:this.attemptIndex},{assessmentClient:this.assessmentClient});else{if("quiz"!==e&&"exam"!==e)throw new Error("Invalid quiz type: "+this.metadata.getTypeName());this.model=new l({sessionId:this.attemptIndex},{assessmentClient:this.assessmentClient,verifiableId:this.verifiableId})}},initializeEvents:function initializeEvents(){this.listenToOnce(this,"view:appended",function(){this.model.fetch()}),this.listenTo(this.model,"question:added",this.addQuestion),this.listenTo(this.model,"questions:reset",this.resetQuestions),this.listenTo(this.model,"state:enter:loading",this.showLoading),this.listenTo(this.model,"state:exit:loading",this.hideLoading),"exam"===this.metadata.getTypeName()&&this.verificationDisplay.showCCAdvertising()&&this.listenTo(this.model,"state:enter:submitted",this.showVcBanner),this.listenTo(this.model,"state:enter:submitted",this.scrollToTop),this.listenTo(this.model,"change:unansweredQuestions",this.renderUnansweredQuestions),this.on("view:closing",this.onClose,this),window.addEventListener("beforeunload",this.onBeforeUnload)},onClose:function onClose(){window.removeEventListener("beforeunload",this.onBeforeUnload)},onBeforeUnload:function onBeforeUnload(s){if(this.model.isState("submitted"))return;var e=this.$$("close-message").html().split("\n")[0];return(s||window.event).returnValue=e,e},state:function state(){return this.model.state()},submit:function submit(){this.setQuestionResponses("presubmit"),this.model.submit().then(function(){this.track("submit",{score:this.model.get("evaluation").getPercentScore(),result:this.model.get("evaluation").isPassed()?"pass":"fail"})}.bind(this)).done()},retake:function retake(){this.model.retake(),this.track("retake")},close:function close(){this.model.isState("submitted")?this.confirmClose():(this.modal=r(this.$$("close-modal")),this.modal.open()),this.track("close")},renderAndBindState:function renderAndBindState(){this.renderState(),this.bindEvents()},bindEvents:function bindEvents(){this.listenTo(this.model,"change:state",this.renderState),this.listenTo(this.model,"change:state",this.updateInputs)},confirmClose:function confirmClose(){this.closeModal(),this.track("confirm_close"),this.onStateChange("start")},addQuestion:function addQuestion(s,t){var e=$("<div>");e.addClass("c-open-single-page-question"),e.addClass("c-assess-theme-phoenix"),this.$$("question-container").append(e);var i=new a({model:s,index:t+1,showFeedbackIcon:!0,el:e[0]});this.questionViews.push(i)},resetQuestions:function resetQuestions(){this.eachQuestion("remove"),this.questionViews=[]},eachQuestion:function eachQuestion(s){var t=Array.prototype.slice.call(arguments,1),e=_(this.questionViews);"string"==typeof s?e.invoke.apply(e,[s].concat(t)):e.each(_.partial.apply(e,[s,_].concat(t)),e)},disableInputs:function disableInputs(){this.eachQuestion("disableInput")},enableInputs:function enableInputs(){this.eachQuestion("enableInput")},setQuestionResponses:function setQuestionResponses(e){this.eachQuestion("setModelResponseToViewResponse",{reason:e})},showLoading:function showLoading(){this.renderAndBindState(),s.start()},hideLoading:function hideLoading(){s.stop()},closeModal:function closeModal(){if(!this.modal)return;this.modal.close(),this.modal=null},showVcBanner:function showVcBanner(){this.model.isState("submitted")&&this.region.append(i,{to:this.$$("vc-banner"),initialize:{isItemPassable:!0,itemMetadata:this.metadata},module:i})},scrollToTop:function scrollToTop(){$(window).scrollTop(0)},render:function render(){this.isPremiumGrading=this.metadata.isPremiumGradingLocked(),this.$el.html(o({config:n,metadata:this.metadata,nextItem:this.neighbors.next,isPremiumGrading:this.isPremiumGrading})),this.renderFsm(),this.renderState(),this.renderSubviews(),this.renderUnansweredQuestions(),this.pluralizer.render(),this.track("render")},renderUnansweredQuestions:function renderUnansweredQuestions(){var e=this.model.get("unansweredQuestions"),s=this.$$("unanswered-questions-container");this.$$("num-questions-unanswered-label").html(e),s.css("visibility",0===e?"hidden":"visible"),this.pluralizer.renderRules(["num-questions-unanswered"])},renderSubviews:function renderSubviews(){this.region.append(t,{to:this.$$("attempt-header"),initialize:{model:this.model,metadata:this.metadata,nextItem:this.neighbors.next,courseMaterials:this.courseMaterials,verificationDisplay:this.verificationDisplay},module:t}),this.renderReactInto(m,"ItemFeedback",{itemType:c.Quiz,courseId:this.metadata.get("course.id"),itemId:this.metadata.get("id")}),this.isPremiumGrading&&this.renderReactInto(h,"PremiumGradingQuizButton",{itemMetadata:this.metadata})},updateInputs:function updateInputs(){this.model.isState("submitting","submitted")?this.disableInputs():this.enableInputs()}});module.exports=b});
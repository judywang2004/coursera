"use strict";!function(){var t=function Affixes($,s,_){var t={defaults:{"bind.scroll":"scroll","attribute.affix":"data-affix","offset.y":"0","offset.x":"0","class":"affix",preserve:"1","z.index":"3000",debounce:500,"lower.bound.selector":""},getAffix:function getAffix(s,e){var t=$(s).data("affix.me");return t&&t.constructor==i.prototype.constructor?e?t.customize(e):t:null},makeAffix:function makeAffix(o,r){var s=$(o),e=t.getAffix(s);return e||(e=new i(s,r),s.data("affix.me",e)),e},readDataAttributes:function readDataAttributes(o,r,e){var s={};for(var t in e){var i=o.attr(r+t.replace(/\./g,"-"));s[t]=void 0===i||0===i.length?e[t]:i}return s}},i=function Affix(t,i){this.$el=$(t),this.$parent=this.$el.parent(),this.emitter=s.emitter(this),this.customize(i),this.affixed=!1,this.options["lower.bound.selector"]&&(this.bottomAffixed=!1,this.originalTop=this.$el.offset().top,this.hasLowerBound=!0)};i.prototype.customize=function(i){return this.options=_.extend({},t.readDataAttributes(this.$el,t["attribute.affix"]+"-",t.defaults),i),this},i.prototype.reposition=function(){var f=void 0,s=void 0,o=void 0;if(!this.$el.is(":visible"))return;var r=$(window).scrollTop(),t=this.$el.offset(),e=this.$el.outerHeight(),i=parseInt(this.options["offset.y"],10)||0;this.hasLowerBound&&(s=$(this.options["lower.bound.selector"]).offset().top-20,f=t.top+e,o=s-this.originalTop,o-=this.options.preserve?2*e:e),!this.affixed&&!this.bottomAffixed&&r>t.top-i?(this.options.preserve&&(this.restore={display:this.$el.css("display"),"z-index":this.$el.css("z-index"),top:this.$el.css("top"),left:this.$el.css("left"),width:this.$el.css("width"),position:this.$el.css("position")},this.placeholder=$("<"+this.$el.prop("tagName")+">").css({display:"block",top:this.restore.top,left:this.restore.left,width:this.restore.width,height:e,"z-index":0}),this.$el.css({display:"block","z-index":this.options["z.index"],top:i,left:t.left,width:this.$el.width(),position:"fixed"}),this.placeholder.insertBefore(this.$el)),this.position=t,this.$el.addClass(this.options["class"]),this.affixed=!0,this.bottomAffixed=!1,this.emitter.trigger("pin")):this.affixed&&r<=this.position.top-i?(this.placeholder.remove(),this.$el.removeClass(this.options["class"]),this.options.preserve&&(this.$el.css(this.restore),this.restore={}),this.affixed=!1,this.bottomAffixed=!1,this.emitter.trigger("unpin")):this.bottomAffixed&&r<t.top-i?(this.$el.css({display:"block","z-index":this.options["z.index"],top:i,left:t.left,width:this.$el.width(),position:"fixed"}),this.bottomAffixed=!1,this.affixed=!0):this.hasLowerBound&&!this.bottomAffixed&&f>=s&&(this.$el.css({top:o+"px",position:"relative",left:this.restore.left}),this.bottomAffixed=!0,this.affixed=!1)},i.prototype.remove=function(){this.placeholder&&this.placeholder.remove(),this.$el.remove()};var e=function external(){return t.getAffix.apply(null,arguments)||t.makeAffix.apply(this,arguments)};return e.start=function(e,o){var s=$(e),r=e==window?$(document):s,i=_.extend({},t.defaults,o);s.on(i["bind.scroll"]+".affix",function(){r.find("["+i["attribute.affix"]+"]").each(function(){var e=$(this);i=_.extend({},i,t.readDataAttributes(e,i["attribute.affix"]+"-",t.defaults));var s=t.getAffix(e,i)||t.makeAffix(e,i);s.reposition()})})},e.stop=function(t){var i=$(t);i.unbind(".affix")},e.start(window),e};"function"==typeof define&&define.amd?define("js/lib/affix",["require","jquery","js/vendor/lucid.v2-7-0","underscore"],function(require){var $=require("jquery"),i=require("js/vendor/lucid.v2-7-0"),_=require("underscore");return t($,i,_)}):"undefined"!=typeof window&&"undefined"==typeof ender&&(window.Affix=t(window.$,window.LucidJS,window._))}();
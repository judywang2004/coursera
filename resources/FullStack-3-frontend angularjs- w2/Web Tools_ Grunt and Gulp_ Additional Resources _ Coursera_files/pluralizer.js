"use strict";define("js/lib/pluralizer",["require","js/lib/pluralize","js/vendor/backbone.v1-1-2","jquery","underscore"],function(require){var e=require("js/lib/pluralize"),Backbone=require("js/vendor/backbone.v1-1-2"),$=require("jquery"),_=require("underscore"),t=Backbone.Model.extend({rules:null,initialize:function initialize(e,t){this.el=$(e),this.rules={},this.setRules(t||{}),_.bindAll(this,"updateDom")},updateDom:function updateDom(i){if(!_.has(this.rules,i))return;var e=this.rules[i],t;e.property?e.model?t=e.model.get(e.property):e.object&&(t=e.object[e.property]):t=e.model||e.object,_.isFunction(e.converter)&&(t=e.converter(t));var r=this.el.find(e.selector);this.pluralizeEach(r,t)},pluralizeEach:function pluralizeEach(e,t){var i=this.pluralize.bind(this);e.each(function(){i(this,t)})},pluralize:function pluralize(i,r){var t=$(i),n=t.attr("data-singular"),s=t.attr("data-plural"),l=e(r,n,s);t.text(l)},setRule:function setRule(e,t){var i=t.model,n=t.property;this.rules[e]=_.extend({selector:'[data-pluralize="'+e+'"]',changeHandler:_.partial(this.updateDom,e)},t);var s=this.rules[e].changeHandler.bind(this);if(i){var r=i.get(n);this.listenTo(i,"change:"+n,s),(r instanceof Backbone.Model||r instanceof Backbone.Collection)&&this.listenTo(r,"change",s)}},setRules:function setRules(e){_(e).each(function(e,t){this.setRule(t,e)},this)},render:function render(){_(_.keys(this.rules)).each(this.updateDom,this)},renderRules:function renderRules(e){_(e).each(this.updateDom.bind(this))}});return t});
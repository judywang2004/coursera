!function(e){var t=function(e,t,s){var n=function template(o){var s=[],c={},n,l=o||{};return function(t,l,o,a,i){c["c-videojs-control"]=function(l,c,o){var i=this&&this.block,a=this&&this.attributes||{};s.push("<div"+e.attr("data-js",a["data-js"],!0,!1)+' tabindex="0"'+e.cls(["c-video-control","vjs-control",l],[null,null,!0])+'><div class="c-video-control-btn vjs-control-content"><span class="vjs-control-text">'+e.escape(null==(n=t(o||""))?"":n)+'</span><em data-js="video-control-icon"'+e.cls(["cif-lg","cif-fw",c],[null,null,!0])+"></em></div></div>")};var u=t("Fullscreen"),d=t("Subtitles"),r=t("Download"),v=t("Cast"),b=t("Settings");switch(l){case"fullscreenToggle":c["c-videojs-control"]("c-fullscreen-control bt3-pull-right","cif-expand",u);break;case"downloadMenuButton":s.push('<div class="c-download-control-container"><div tabindex="0" data-js="download-control" class="c-video-control vjs-control vjs-menu-button c-download-control"><div class="c-video-control-btn vjs-control-content"><a data-js="download-trigger download-icon" download="lecture.mp4"><span class="vjs-control-text">'+e.escape(null==(n=t(r))?"":n)+'</span><i data-js="video-control-icon" class="cif-lg cif-fw cif-download"></i></a></div></div></div>');break;case"volumeMenuButton":c["c-videojs-control"].call({attributes:{"data-js":"video-mute-control"}},"c-volume-menu-button vjs-menu-button","cif-volume-up c-volume-icon","Volume");break;case"playToggle":c["c-videojs-control"].call({attributes:{"data-js":"c-play-control"}},"c-play-control","cif-play");break;case"settingsMenuButton":c["c-videojs-control"].call({attributes:{"data-js":"settings-menu-button"}},"c-settings-control vjs-menu-button","cif-cog",b);break;case"countdown":s.push('<div class="vjs-control c-countdown"><span class="c-countdown-text"><em class="cif-spin cif-refresh"></em></span></div>');break;case"circleSliderHandle":s.push("<div"+e.cls(["c-slider-handle",o],[null,!0])+"></div>");break;case"circleSeekHandleText":s.push('<i class="cif-circle c-seek-handle-circle"></i><span class="vjs-control-text">'+e.escape(null==(n=t(a))?"":n)+"</span>");break;case"subtitlesMenuButton":c["c-videojs-control"]("c-subtitles-control vjs-menu-button bt3-pull-right","cif-captions",d);break;case"subtitlesMenuItem":s.push('<em class="cif-lg cif-fw c-subtitles-menu-item-selected-icon"></em><span data-js="c-subtitles-menu-item-label" class="c-subtitles-menu-item-label caption-text">'+e.escape(null==(n=t(i))?"":n)+"</span>");break;case"subtitlesOffLabel":s.push(""+e.escape(null==(n=t("Subtitles Off"))?"":n));break;case"subtitlesMenuTitle":s.push('<h3 class="vjs-menu-title headline-1-text menu-section-title">'+e.escape(null==(n=t("Subtitles"))?"":n)+"</h3>");break;case"menuDivider":s.push('<div class="c-menu-divider"></div>');break;case"chromecastButton":c["c-videojs-control"]("c-chromecast-control bt3-pull-right","icon-cast",v)}}.call(this,"_t"in l?l._t:"undefined"!=typeof t?t:void 0,"controlName"in l?l.controlName:"undefined"!=typeof controlName?controlName:void 0,"classes"in l?l.classes:"undefined"!=typeof classes?classes:void 0,"time"in l?l.time:"undefined"!=typeof time?time:void 0,"label"in l?l.label:"undefined"!=typeof label?label:void 0),s.join("")};return function(e){return e&&"_t"in e&&(t=e._t.merge(t)),n(e)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!bundles/videojs/layout/nls/controls"],function(e,n){var s;return t(e,n,s)}):e.jade.templates["bundles.videojs.layout.controls"]=t(e.jade.helpers)}(window);
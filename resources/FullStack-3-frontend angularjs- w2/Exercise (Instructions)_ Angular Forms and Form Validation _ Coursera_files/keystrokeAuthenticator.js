define("js/lib/keystrokeAuthenticator",["require","exports","module","js/lib/distance","underscore"],function(require,exports,module){"use strict";function KeystrokeAuthenticator(e){_.extend(this,t,e)}var e=require("js/lib/distance"),_=require("underscore"),t={authPhrase:"I certify this submission as my own original work completed in accordance with the Coursera Honor Code.",levenshteinMax:12};KeystrokeAuthenticator.prototype={isCorrectAuthPhrase:function isCorrectAuthPhrase(t){return e.levenshteinDistance(t,this.authPhrase)<=this.levenshteinMax},hasCompletedAuthPhrase:function hasCompletedAuthPhrase(e,t,s){return t=t||1,s=s||1,e&&this.authPhrase.length-e.length<=t&&e.length-this.authPhrase.length<=s},isCorrectAuthPhraseSoFar:function isCorrectAuthPhraseSoFar(t){var s=this.authPhrase.substring(0,t.length);return e.levenshteinDistance(t,s)<=this.levenshteinMax}},module.exports=KeystrokeAuthenticator});
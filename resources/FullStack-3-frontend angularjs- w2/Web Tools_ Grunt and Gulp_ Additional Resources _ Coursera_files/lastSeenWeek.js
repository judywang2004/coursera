define("bundles/ondemand/utils/lastSeenWeek",["require","exports","module","pages/open-course/common/constants","js/lib/coursera.store"],function(require,exports,module){"use strict";var n=require("pages/open-course/common/constants"),e=require("js/lib/coursera.store"),s="last_seen_week_"+n.courseId;exports.getLastSeenWeek=function(){return e.get(s)},exports.setLastSeenWeek=function(n){return e.set(s,n)}});
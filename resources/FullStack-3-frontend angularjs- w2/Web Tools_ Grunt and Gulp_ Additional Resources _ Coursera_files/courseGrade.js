define("pages/open-course/common/singletons/courseGrade",["require","exports","module","memoize!pages/open-course/common/promises/courseGrade","pages/open-course/common/singletons/course"],function(require,exports,module){"use strict";var e=require("memoize!pages/open-course/common/promises/courseGrade"),o=require("pages/open-course/common/singletons/course");module.exports=o.then(function(o){return e(o.get("id"))})});
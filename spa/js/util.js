define(function() {
    var base = (function () {
        var _count = 0;
        return {
            m1: function () {
                console.log("工具1");
            },
            m2: function () {
                console.log("工具2");
            }
        };
    })();

   return base;
});

define(['jquery','util','layui'], function ($,base,layui) {
    var module = (function () {
        return {
            event: function() {
                var self = this;
                layui.use(['layer'], function(){
                    $("#app").on("click",function(){
                        self.m1();
                        base.m1();
                        layer.msg('Hello World');
                    })
                })
            },
            m1: function () {
                console.log("封装方法1");
            },
            m2: function () {
                console.log("封装方法2");
            },
            init: function() {
                this.event();
            }
        };
    })();

    return module;
});
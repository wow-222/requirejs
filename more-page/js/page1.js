require(['config'], function () {
    require(['jquery','sysPage1'], function ($,page1) {
        console.log($("#app"))
        // 业务多的话JS建议单独抽取出来
        page1.init();
    });
});
require(['config'], function () {
    require(['jquery','util'], function ($,base) {
        // 业务少的话直接写在这里即可
        base.m1();
        console.log($("#app"));
    });
});
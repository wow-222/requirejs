require.config({
    baseUrl: '../spa',
    map: {
        '*': {
            css: 'lib/require/require-css.min'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery.min',
        layui: 'lib/layui/layui',
        util: 'js/util',
        app: 'js/app'
    },
    shim:{
        layui:{
            deps:['css!lib/layui/css/layui.css'],
            exports: 'layui'
        }
    }
});


require(["jquery","app"], function ($,a) {
    $(function(){
         /**
        * 这里可以配置相关的layui
        * layui.config
        */
        a.init();
    })
});
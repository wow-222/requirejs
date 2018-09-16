require.config({
    baseUrl: '../more-page',
    map: {
        '*': {
            css: 'lib/require/require-css.min'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery.min',
        layui: 'lib/layui/layui',
        util: 'js/util',
        sysPage1: 'js/sysPage1' 
    },
    shim:{
        layui:{
            deps:['css!lib/layui/css/layui.css'],
            exports: 'layui'
        }
    }
});
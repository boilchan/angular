var directives = angular.module('s7.directives',[]);
directives.directive('s7Title',function(){
    // 我们关于指令的所有数据都记在return出去的对象里，AngularJs会读取这个对象，来解析对应的指令
    return {
        template:`
<div class="page-header">
    <h1>传智前端七期
        <small>流行框架阶段</small>
    </h1>
</div>`
    };
});
// 服务器发回来的js文件，是一个函数调用，调用这个函数时会传入一个数据对象。
// 调用的函数的函数名：是通过http://www.xxx.com?a=123&callback=__jsonp__0得到的。
__jsonp__0({
    name: '张三',
    age: 14,
    sex: '女'
});
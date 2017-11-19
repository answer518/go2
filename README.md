# 项目介绍

准备用node从0开始搭建一个web系统。敬请期待

## 2017.11.12

今天是光棍节后的第二天，我在北京首图创建了这个项目，命名为go2。采用架构是:Node.js + Redis + Mongodb + React。

## 2017.11.13

完成以下工作：

* 1、初始化项目目录
* 2、引入project-core模块，简化web框架开发流程
* 3、babel自动监听src代码变化并编译
* 4、根据环境变量读取config文件
* 5、引入mongoose模块，成功连接到mongodb数据库

> 更新：初始化express, 并引入debu调试
> 统一异常处理。

## 2017.11.14

主要完善的内容有：

* 1、完成用户的增、删、改、查等
* 2、用户注册，登录与注销，引入session机制
* 3、API接口返回错误时，统一返回json: `{err: ‘err message’}`

## 2017.11.15

主要完善了发帖，查询，删除以及评论功能。

## 2017.11.16

* 1、从memory session到redis session
* 2、引入nodeman,用于监控文件变化并重启应用
* 3、webpack整合前端资源(js,css,img)
* 4、react技术栈：webpack-dev-server, react-hot-loader热加载, 单页面(SPA):react-router路由
* 5、页面UI采用BootStrap
* 6、import-loader导入jQuery到bootstrap模块

## 2017.11.17

构建可视化界面：
* 1、引入React组件技术构建页面
* 2、react-router实现页面路由
* 3、webpack-dev-server反向代理，前后端联调


## 2017.11.18
* 1、解决热更新的问题：将Router组件放到entry.js入口文件，修改其它组件就会自动更新。
* 2、完善了用户登录注销。
* 3、增加发帖功能，发帖成功后跳转
* 4、文章支持markdown语法，代码高亮等
* 5、XSS处理

# 参考资料

* [Webpack-dev-server: proxy](http://webpack.github.io/docs/webpack-dev-server.html#bypass-the-proxy)
* [react-hot-loader](http://gaearon.github.io/react-hot-loader/getstarted/)
* [react-router](https://github.com/reactjs/react-router)
* [react-router中文文档](http://react-guide.github.io/react-router-cn/)
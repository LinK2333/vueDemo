# vue-demo

> A Vue.js project

## Build Setup

``` bash
# 加载依赖
npm install

# 测试环境启动
npm run dev

# 打包
npm run build

```

项目开启eslint 请按照规范书写代码

App文件中creatd钩子函数中设置了防止vuex刷新消失的方法,勿动

main.js文件引入全局相关文件

src下文件说明：

api 存放axios请求路径,对应page/components文件中的同名页面

assets 存放本地静态文件

components 存放封装的组件

page 存放页面文件

router 设置路由

store 存放 vuex的管理

style 存放 page/components文件中的样式,在页面中使用`@import`引入,base样式已放入全局

utils 存放封装的axios/fliter以及tool

axios.js文件对axios进行了实例化,请求前挂载请在request拦截器中设置,后台返回状态码处理请在response拦截器中设置

filter.js文件设置了全局过滤,已经引入了moment.js,过滤操作放入install中

tool.js文件封装应用工具,如函数截流和函数防抖等







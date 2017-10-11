# 前言

vue-cli是构建单页应用的脚手架,本项目通过修改webpackConfig实现多页应用。

## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本 

```
git clone https://github.com/windy05/vue-cli-multi.git

cd vue-cli-multi

npm install

#### 开发启动

npm run dev

#### 生产打包

npm run build 

#### mock服务启动

npm run mock

```

# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 相关配置
├── mock                                        // mock数据模拟服务
├── src                                         // 源码目录
│   ├── api                                     // 后台api统一封装
│   ├── assets                                  // 资源
│   ├── components                              // 组件
│   ├── module                                  // 模块
│   │   ├── index                               // index模块目录（访问路径为module/index.html）
│   │   │   ├── router                          // index模块路由
│   │   │   ├── views                           // index模块页面
│   │   │   ├── App.vue                         // index程序vue入口
│   │   │   ├── index.html                      // index模块html页面(模块目录唯一html，命名不强制要求)
│   │   │   ├── main.js                         // index模块js主入口（命名强制要求main.js）
│   ├── static                                  // 非webpack静态引用
├── .babelrc                                    
├── .postcssrc.js                               
├── package.json                                // 配置文件

.


# License

[MIT](http://opensource.org/licenses/MIT)

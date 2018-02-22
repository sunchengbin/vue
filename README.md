# vue-hello-world

## 技术栈
+ vue 2.0
+ vue-router
+ vuex
+ webpack2


## Build Setup

``` bash
# 安装依赖
npm install

# 开发环境启动
npm run dev

# 预发布环境构建
npm run build-preview

# 测试环境构建
npm run build-test

# 代码上线构建
npm run build

# 公用模块打包成单独js(结果参考/src/common/文件夹下lib_*文件)，避免每次打包都要重复打包，可以利用缓存

> 解决了两个问题
> 1、每次打包都需要重复打包公共部分，增加打包时间
> 2、公共代码不能共用，每个页面都要重复下载

## 非开发环境
npm run dll-production

> 打包的lib_*文件存放在/src/common/dist/下面
> 当运行npm run build 或者npm run build-review时会把该文件迁移到dist/下面

## 开发环境
npm run dll-test

> 打包的lib_*文件存放在/src/common/debug/下面


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

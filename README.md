# Ant-Design-Pro-practice
Ant-Design-Pro实践

### 笔记
> 服务端交互流程
1. .roadhogrc.mock.js  定义url和返回数据格式
2. services/api  封装请求，暴露请求方法
3. models/*     发送请求，并处理请求结果
4. routers/*    对应页面（组件），dispatch models 内定义的操作

> 添加路由流程
1. common/menu.js   配置路由路径
2. routes/*           定义匹配组件
3. common/router.js  关联组件和路由

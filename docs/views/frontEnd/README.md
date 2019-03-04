---
title: 前端规范
---

# 前端规范文档指南

## 框架使用
大框架： [Vue](https://cn.vuejs.org)  
UI框架：[element-ui](http://element-cn.eleme.io)  
CSS预处理： [Scss](https://sass-lang.com/)  
http请求： [axios](https://github.com/axios/axios)  
数据可视化图表：[ECharts](https://echarts.baidu.com/feature.html)  


A端、B端使用的CMS模版  
模版框架： [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)  
模版补充： [vue-element-admin（部分组件从这里挪过去）](https://github.com/PanJiaChen/vue-element-admin)



## 风格指南（以CMS项目为准）

### 整体目录结构
![](https://images.gitee.com/uploads/images/2019/0227/175504_c5082097_4774634.png "屏幕截图.png")  
PS：未提到的文件夹为Vue官方布局

#### 请求相关方法(api)
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/175947_f0ad96da_4774634.png "屏幕截图.png")
- api根目录下为通用请求；
- content目录下为具体业务请求；

具体范例：  
```javascript
import request from '@/utils/request'

/**
 * 1. 返回的是Promise函数
 * 2. 方法命名与业务相关
 */
export function confirmInvoice(data) {
  return request({
    url: '/invoice/confirm',
    method: 'post',
    data
  })
}
```

```javascript
// 页面组件
confirmInvoice({ eid: this.list.eid }).then(() => {
    // 具体业务
})
```
特例： [每个页面的列表请求](#列表请求)

#### 共用的组件(components)
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/181516_9e5c780a_4774634.png "屏幕截图.png")
- 组件名写在外层文件夹上，主组件通过index导出（组件里面的name需要与组件名同名）
- 如果有同一大类的，请收集起来以同一出口(index.js)形式导出  
![](https://images.gitee.com/uploads/images/2019/0227/182044_e293db33_4774634.png "屏幕截图.png")
- 如果页面中使用了私有组件，要放在具体页面的目录的components文件夹内  
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/182328_468664df_4774634.png "屏幕截图.png") 

#### svgIcon(icons)
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/182448_d633e8bc_4774634.png "屏幕截图.png")
- svgIcon的具体使用方法请参考 [链接](https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/svg-icon.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)  


#### 具体页面文件(views)
![输入图片说明](https://images.gitee.com/uploads/images/2019/0227/183547_a6856d49_4774634.png "屏幕截图.png")

----
### 项目内的特殊文件及方法
#### 字段相关描述(field)
##### mapFileName.js
`nameMap`里储存了路由的ID（router配置中的name属性），新增页面时请同步配置一下这个文件  
![输入图片说明](https://images.gitee.com/uploads/images/2019/0228/005533_2c493b6e_4774634.png "屏幕截图.png")  
执行路由跳转时请使用`this.$router.push({ name: nameMap.xxx.xxx })` 
###### 列表请求
![输入图片说明](https://images.gitee.com/uploads/images/2019/0228/005807_881d1e5c_4774634.png "屏幕截图.png")  
由于项目中带table的页面特别多，请求的方法及返回的参数格式雷同  
所以抽出了一个共用请求方法`getList`，实际使用时只需要`getList(this.$route.name, this.listQuery)`就可以了（因为路由的ID与实际请求的API已经在`listMap`中关联上了）

#### 工具类集合(utils)
##### imagePicker.js
为了能让页面加载提速，页面内需要的静态图片资源请尊从以下步骤操作  
- 把图片转成png格式  
- 手动上传图片至阿里云OSS指定文件夹  
- 在imagePicker.js内的imgList数组中添加文件名  
- 使用时直接imagePicker(filename)即可

----

### 样式相关

*请先熟悉Scss语法*

#### class的命名规则
因为使用的是Vue，在vue文件里很贴心地允许使用scope来约束css的作用域，所以现在样式名可以写得很简单也不必担心产生污染。  
所以只需要遵循以下简单原则即可：  
- 每一个模块的最外层以“*-container”起手，如“app-container”（当在公共组件出现时，应该以组件名来命名）
- 模块内使用嵌套形式书写，降低命名复杂度
- 优先使用语义化的HTML标签（推荐）：
    1. `<h1> ~ <h5>`比`<div class="title">`要好  
    2. `<p>`比 `<div class="paragraph">`要好
- 无法用HTML5标签描述的再使用class命名
- 辅助的状态应以串联的形式出现，自身应没有单独样式

```scss
.hint-container {
  h1 {/* ... */}
  section {
    .hint-item {
      /* 缺省状态 */
      &.success { /* 成功状态 */ }
      &.warning { /* 警告状态 */ }
  }  
}
```
#### 建议
- 出现比较多的样式，可以抽出来放到全局样式文件中，或者把那一块抽成全局组件提供调用
- 灵活使用Scss的`@mixin`，可以减少重复代码的出现

----
## Tips
- JS方法命名等最好遵循语义化，使代码通俗易懂 [例子](https://juejin.im/post/5c763f0fe51d4512f1106fbd#heading-11)
- 尽量为每个方法都提供注解，方便你我他（方法名一目了然的可以不需要）
- 定期使用ESLint检查代码，如有标红的地方试着用Alt+Enter修复问题（WebStorm）

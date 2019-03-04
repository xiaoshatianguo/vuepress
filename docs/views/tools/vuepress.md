---
title: vuepress
---

# [vuepress](https://vuepress.vuejs.org/zh/)使用指南

> vuepress是以 `vue` 为驱动的内容管理工具，开箱即用，简单方便。

## 安装

``` vim
yarn add -D vuepress
```

## 运行
1. 建一个文件夹写下 `markdown.md` 文件
2. 运行命令：`docs` 表示 `.md` 文件所在的上一层目录

``` vim
npx vuepress dev docs
```

## 配置
1. 目录结构

![](http://xiaosha520.cn/1551422873%281%29.jpg)


2. 配置文件

配置路径时需要特别注意，路径配置不正确会导致项目侧边栏空白

`url` 一般以/开头，如果以/结尾，就会去找目录下的 `README.md` 文件，如果没有/结尾则是*.md文件
```javascript
// .vewpress/config.js
module.exports = {
  title: 'XiaoSha',
  description: '技术文档体系',
  themeConfig: {
    nav: [ // 导航栏配置
      {text: '前端规范', link: '/views/'},
      {text: 'Github', link: 'https://github.com/vuejs/vuepress/tree/0.x/docs/zh/default-theme-config'},
    ],
    sidebar: { // 侧边栏配置
      '/views/': [
        {
          title: '前端规范',
          collapsable: true,
          children: [
            '/views/frontEnd/',
            '/views/frontEnd/a'
          ]
        },
        {
          title: '前端工具',
          children: [
            '/views/tools/vscode',
            '/views/tools/vuepress',
            '/views/tools/webstorm'
          ]
        },
      ],
    },
    sidebarDepth: 2,
    displayAllHeaders: true,
    lastUpdated: '最后更新时间'
  }
}
```

3. 首页配置

如果需要首页，就要配置根目录下的`README.md` 文件，`vuepress` 给出了一个基本的模板

    ```
    ---
    home: true
    heroImage: 
    actionText: 快速上手 →
    actionLink: /views/
    features:
    - title: 简洁至上
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
    footer: MIT Licensed | Copyright © 2018-present Evan You
    ---
    ```

## 写作
以 [`markdown`](http://www.markdown.cn/) 语法进行写作

## 部署

vuepress的[部署](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)有多种方式，这里采用Github Pages的方法。

如果你打算发布到 `https://<USERNAME>.github.io/` ，则可以省略这一步，因为 `base`  默认即是 `"/"`。

如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。



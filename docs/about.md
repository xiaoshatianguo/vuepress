---
title: 关于
---

#### 安装

``` vim
yarn add -D vuepress
```

#### 运行
1. 建一个文件夹写下markdown.md文件
2. 运行命令：docs表示md文件所在的上一层目录

``` vim
npx vuepress dev docs
```

#### 配置
1. 目录结构
├─ docs
│ ├─ README.md
│ └─ .vuepress
│ └─ config.js
└─ package.json
2. 配置文件

``` asciidoc
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

#### 写作


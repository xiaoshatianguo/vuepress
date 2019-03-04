---
title: vscode
---
# 关于[vscode](https://code.visualstudio.com/)的使用指南
> vscode作为前端流行的编辑器之一，初次下载需要经过一系列的插件配置，集成开发相关的插件才能很好的使用，相对于 `webstorm` 等集成编辑器来说，插件安装较多时运行速度较慢，容易发生卡顿。
## 与webstorm比较

对比项\IDE | vscode | webstorm
--- | ---|---
下载使用 | 免费使用 | 收费，需破解
代码跳转 | 部分支持 | 支持
插件安装 | 需要安装插件 | 集成了大部分

## 下载安装
1. 直接去官网[下载](https://code.visualstudio.com/)
2. 傻瓜式安装,路径避免选系统盘

## 常用[插件](https://marketplace.visualstudio.com/VSCode)配置
所有的插件可以直接去商店下载，安装后重启,挑选插件需要看下载量，一般选下载量最高的，而且尽量不要装太多插件，会导致打开软件非常卡顿

### ESLint
代码规范，格式化，可以去 首选项 -> 设置 里搜索 `format` ，勾选 `Edit:Format On Save` ，配置保存时格式化文件

### Git History
方便查看和搜索 `git` 日志以及图形和详细信息，git提交历史

### GitLens
> 增强了构建在`vscode`代码中的`Git`功能，通过`Git blame`注释和代码可以直观地看到代码最后提交时间、作者、`commit`

每一行 `code` 的作者、提交时间、`commit log` 等信息
![](http://xiaosha520.cn/1-4.png)
安装成功后，会出现这个图标
![](http://xiaosha520.cn/3-6.png)

### Debugger for Chrome
打断点神器

### Beautify
代码中美化`javascript`、`JSON`、`CSS`、`Sass` 和 `HTML`

### Vetur
`vue`项目必装插件，用于vue代码高亮格式化等

### Bookmarks
在文件中打标签，当文件行数较多时需要不断上下拉动滚动条，这个情况下可以选择打多个标签，用快捷键在不同的标签下跳转更加方便，无需拉动滚动条就可以定位到标签行
![](http://xiaosha520.cn/8.png)


### TODO Hightlight
高亮标注待办项目，只需要输入 `TODO:待办`，项目中就会高亮 `TODO:`项，可以用快捷键查找所有的todo事项，不用担心遗漏啦

### Element UI Snippets
`vue`开发用`element ui`框架是很有用，会有`el-`开头的代码提示

### Vue 2 Snippets
`vue`扩展，有代码提示，支持代码简写提示

### Chinese Language Pack
汉化包

## 自定义代码片段
在命令面板中输入 `Configure User Snippets`
![](http://xiaosha520.cn/10.png)

选择你要编辑的代码片段，我们一vue来举例
选择vue.json进行编辑


```
 "Print to console": {
        "prefix": "log1",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    },
    "Vue base Template": {
        "prefix": "vue",
        "body": [
            "<!--$0-->",
            "<template>",
            "<div>",
            "$1",
            "</div>",
            "</template>\n",
            "<script>",
            "export default {",
            "  components: {},",
            "  data() {",
            "    return {",
            "$2",
            "   };",
            "  },",
            "  created() {",
            "$3",
            "  },",
            "  methods: {",
            "$4",
            "}",
            "};",
            "</script>\n",
            "<style lang=\"scss\" scoped>",
            "</style>",
        ],
        "description": "vue基本模板"
    }
}
```

格式都是支持自定义的，保存后新建一个vue文件，编辑器中输入vue然后回车

![](http://xiaosha520.cn/1786275126-5c1e561c07352_articlex.png)

模板分三部分

- prefix：快捷键名称（vue文件中敲vue，然后回车直接出现自定义模板）
- body： 模板内容
- description：模板的描述信息（给你自己看的，不会显示在模板里面）


语法

1. 在body中，使用转义字符来书写制表符Tab、双引号"等内容； 
2. 使用${num: default
使用${num: default name}来定义输入位置，按下Tab键来递进光标到下一个；
3. num的值为0,1,2,3...。0为光标的最终位置，1,2,3...决定了光标的顺序位置；
4. default name是默认值，可按下Tab不编辑直接跳过。


上面的模板是针对vue文件的，你也可以可以根据需要配置其他文件的模板，而且支持全局文件模板
选择 New Global snippets file... 
新建一个全局模板

```
{
    "Print to mounted": {
        "prefix": "mounted",
        "body": [
            "mounted(){",
            "this.$nextTick(()=>{",
            "$5",
            "})",
            "},",
        ],
        "description": "mounted模板"
    }
}
```

![](http://xiaosha520.cn/1655543640-5c1e5820b61fc_articlex.png)

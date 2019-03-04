module.exports = {
  title: '筱莎Ya',
  description: '技术文档体系',
  base: '/vuepress-dist/',
  themeConfig: {
    nav: [
      {text: '前端文档', link: '/views/'},
      {text: 'Github', link: 'https://github.com/vuejs/vuepress/tree/0.x/docs/zh/default-theme-config'},
    ],
    sidebar: {
      '/views/': [
        {
          title: '前端规范',
          collapsable: true,
          children: [
            '/views/frontEnd/',
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

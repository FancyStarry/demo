import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lynna Demo",
  description: "is Demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //搜索
    search: {
      provider: 'local'
    },
    //编辑此页面
    editLink: {
      pattern: 'https://github.com/FancyStarry/demo/tree/main/docs:path'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FancyStarry/demo/' }
    ],
  },
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  },
  // 最后编辑时间
  lastUpdated: true
})

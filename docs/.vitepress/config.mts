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
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // 最后编辑时间
  lastUpdated: true
})

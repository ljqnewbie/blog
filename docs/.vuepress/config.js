module.exports = {
    title: 'ljq的博客',
    description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        //增加manifest.json
        ['link', { rel: 'manifest', href: '/manifest.json' }],
      ],
    themeConfig:{
        nav: require('./nav'),
          sidebar: require('./sidebar')
      },
    plugins:[
      ["@vuepress/back-to-top"], // 返回顶部
      ["@vuepress/nprogress"],   // 加载进度条
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      [
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: 'pjS8YP44ga1lfPYYE8k22peo-gzGzoHsz',
            appKey: 'r35AQnPQVpiSqkQLoNsisX9B'
          }
        }
      ]
     ]
     
}

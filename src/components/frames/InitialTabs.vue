<template>
  <router-tab :tabs="tabs" />
</template>

<script>
export default {
  name: 'InitialTabs',
  data() {
    return {
      tabs: [
        // 只需设置 fullpath，程序将自动从 router 配置中获取页签的标题/图标等信息
        '/initial-tabs/page-leave',

        // closable 页签是否可关闭
        { to: '/initial-tabs/tab-dynamic', closable: false },

        // 具有动态页签标题的页签，需要设置初始页签标题
        { to: '/initial-tabs/page/1', title: '页面1' },

        // <router-link> location 方式配置
        {
          to: {
            path: '/initial-tabs/page/2',
            query: { t: 2 }
          },
          title: '页面2'
        },

        // 默认 key 配置下，该页签与 '/initial-tabs/page/2' 页签的 key 一致，将只保留第一个出现的页签
        { to: '/initial-tabs/page/2?t=1', title: '页面2-1' },

        // Iframe 页签
        `/initial-tabs/iframe/${encodeURIComponent(
          'https://m.hao123.com/'
        )}/Hao123/rt-icon-web`
      ]
    }
  }
}
</script>

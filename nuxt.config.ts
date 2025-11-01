// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/tailwind.css', '~/assets/css/base.css'],
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/Near-Your-Ear/',
    head: {
      title: '應聲倒地 On the Floor | 耳東有爾',
      meta: [
        {
          name: 'description',
          content:
            '耳東有爾首張 EP《應聲倒地 On the Floor》全平台上架，立即選擇你的串流服務收聽。'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ysddtw.github.io/Near-Your-Ear/' },
        { property: 'og:title', content: '應聲倒地 On the Floor | 耳東有爾' },
        {
          property: 'og:description',
          content:
            '耳東有爾首張 EP《應聲倒地 On the Floor》全平台上架，立即選擇你的串流服務收聽。'
        },
        { property: 'og:image', content: 'https://ysddtw.github.io/Near-Your-Ear/img/cover.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://ysddtw.github.io/Near-Your-Ear/' },
        { name: 'twitter:title', content: '應聲倒地 On the Floor | 耳東有爾' },
        {
          name: 'twitter:description',
          content:
            '耳東有爾首張 EP《應聲倒地 On the Floor》全平台上架，立即選擇你的串流服務收聽。'
        },
        { name: 'twitter:image', content: 'https://ysddtw.github.io/Near-Your-Ear/img/cover.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap'
        },
        { rel: 'icon', type: 'image/png', href: '/img/cover.png' }
      ]
    }
  }
})

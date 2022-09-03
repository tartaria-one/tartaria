module.exports = {
  title: 'Тартария',
  lang: 'ru-RU',
  plugins: [
    [
      '@vuepress/plugin-search'
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        text: 'Забытые слова',
        link: '/dictionary/README.md',
        children: [
          '/dictionary/russian_old_words.md',
        ],
      },
      {
        text: 'Лекарственные травы России',
        link: '/russia_medicinal_herbs/README.md',
        children: [
          '/russia_medicinal_herbs/polygonum_aviculare.md',
        ],
      },
      {
        text: 'Пословицы и поговорки',
        link: '/wisdom/README.md',
      },
      {
        text: 'Афоризмы',
        link: '/aphorisms/README.md',
      },
      {
        text: 'Цитаты',
        link: '/quotes/mikhail_mikhaylovich_zhvanetsky.md',
      },
    ],
  }

}

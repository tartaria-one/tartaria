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
        text: 'Сбой в фантазиях',
        link: '/broken_fantasies/README.md',
        children: [
          '/broken_fantasies/no_tartaria.md',
          '/broken_fantasies/war_horses.md',
        ],
      },
      {
        text: 'Забытые слова',
        link: '/dictionary/README.md',
        children: [
          '/dictionary/abvgd.md',
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
        children: [
          '/wisdom/other.md',
        ],
      },
      {
        text: 'Афоризмы',
        link: '/aphorisms/README.md',
      },
      {
        text: 'Цитаты',
        children: [
          '/quotes/lev_nikolayevich_tolstoy.md',
          '/quotes/mikhail_mikhaylovich_zhvanetsky.md',
        ]
      },
    ],
  }

}

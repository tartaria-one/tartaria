import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'Русский',
        lastUpdatedText: 'Последнее обновление',
        next: 'Вперёд',
        prev: 'Назад',
        contributorsText: 'Авторы',
      },
    },
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
          '/quotes/james_branch_cabell.md',
          '/quotes/lev_nikolayevich_tolstoy.md',
          '/quotes/mark_twain.md',
          '/quotes/mikhail_mikhaylovich_zhvanetsky.md',
          '/quotes/honore_de_balzac.md',
        ]
      },
    ],
  }),
  title: 'Тартария',
  lang: 'ru-RU',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '',
        },
      },
    }),
  ],
});

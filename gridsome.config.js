// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Michael Pellegrini',
  siteUrl: 'https://www.michaelpellegrini.com',
  siteDescription: 'Hello! I\'m Michael Pellegrini. I usually go by Mike. I\'ve been a software architect/developer for many years. Welcome to my personal space on the internet where I share my thoughts, ideas and learnings about software development, home automation and whatever else is peaking my interests.',
  templates: {
    BlogPost: '/blog/:slug',
    Tag: '/blog/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'content/blog/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {}
      }
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
}

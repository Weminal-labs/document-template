const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  redirects: () => [
    {
      source: '/docs',
      destination: `/docs/latest`,
      permanent: true,
    },
  ],
  reactStrictMode: true
});
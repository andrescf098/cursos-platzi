export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  plugins: [require('prettier-plugin-astro')],
  overrides: [
    {
      files: '**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
      options: {
        parser: 'astro',
      },
    },
  ],
};
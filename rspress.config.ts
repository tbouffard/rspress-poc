import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: ' Rspress POC',
  description: 'POC the Rspress SSG',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  // https://rspress.dev/guide/basic/deploy#static-resource-prefix-configuration
  // builderConfig: {
  //   output: {
  //     // not working for the home page
  //     assetPrefix: './',
  //   },
  // },
});

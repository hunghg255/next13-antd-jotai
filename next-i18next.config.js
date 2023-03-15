const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
  fallbackLng: ['vi'],
};

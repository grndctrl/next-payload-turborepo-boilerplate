const developmentConfig = require('@grndctrl/prettier-config/development.json');
const productionConfig = require('@grndctrl/prettier-config/production.json');

const config =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

module.exports = {
  ...config,
};

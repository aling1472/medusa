module.exports = {
  integrations: {
    medusa: {
      location: '@vue-storefront/medusa-api/server',
      configuration: {
        api:{
          url: 'http://localhost:9000'
        }
      }
    }
  }
};

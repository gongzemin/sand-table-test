(function() {
  define('newVueInstance', ['axios'], function(axios) {
    'use strict'
    var newVueInstance = {
      VERSION: '1.0'
    };
    var Vue = require('vue').default;

    const axios_instance = axios.create({

    });

    Vue.prototype.$axios = axios_instance;
    newVueInstance = new Vue();

    return newVueInstance;
  })
}())

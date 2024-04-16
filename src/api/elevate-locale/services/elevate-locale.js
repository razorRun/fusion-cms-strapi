'use strict';

/**
 * elevate-locale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-locale.elevate-locale');

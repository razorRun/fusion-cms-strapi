'use strict';

/**
 * elevate-country service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-country.elevate-country');

'use strict';

/**
 * elevate-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-page.elevate-page');

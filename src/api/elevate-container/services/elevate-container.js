'use strict';

/**
 * elevate-container service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-container.elevate-container');

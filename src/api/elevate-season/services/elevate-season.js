'use strict';

/**
 * elevate-season service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-season.elevate-season');

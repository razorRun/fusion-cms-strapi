'use strict';

/**
 * elevate-show service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-show.elevate-show');

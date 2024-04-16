'use strict';

/**
 * elevate-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-program.elevate-program');

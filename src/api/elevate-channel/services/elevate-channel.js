'use strict';

/**
 * elevate-channel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-channel.elevate-channel');

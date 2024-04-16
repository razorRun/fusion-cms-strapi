'use strict';

/**
 * elevate-channel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::elevate-channel.elevate-channel');

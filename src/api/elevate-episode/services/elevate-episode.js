'use strict';

/**
 * elevate-episode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-episode.elevate-episode');

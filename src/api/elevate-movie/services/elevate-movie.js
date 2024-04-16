'use strict';

/**
 * elevate-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-movie.elevate-movie');

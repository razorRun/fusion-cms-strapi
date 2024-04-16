'use strict';

/**
 * elevate-metadata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-metadata.elevate-metadata');

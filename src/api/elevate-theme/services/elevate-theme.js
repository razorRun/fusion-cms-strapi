'use strict';

/**
 * elevate-theme service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elevate-theme.elevate-theme');

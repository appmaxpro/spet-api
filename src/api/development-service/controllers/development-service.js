'use strict';

/**
 * development-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::development-service.development-service');
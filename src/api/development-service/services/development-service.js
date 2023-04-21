'use strict';

/**
 * development-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::development-service.development-service');
'use strict';

/**
 * development-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::development-service.development-service');
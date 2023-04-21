'use strict';

/**
 * cloud-hosting-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloud-hosting-service.cloud-hosting-service');
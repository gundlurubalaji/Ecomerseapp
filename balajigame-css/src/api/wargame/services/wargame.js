'use strict';

/**
 * wargame service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wargame.wargame');

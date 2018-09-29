'use strict';

/**
 * Storydefinition.js controller
 *
 * @description: A set of functions called "actions" for managing `Storydefinition`.
 */

module.exports = {

  /**
   * Retrieve storydefinition records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.storydefinition.search(ctx.query);
    } else {
      return strapi.services.storydefinition.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a storydefinition record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.storydefinition.fetch(ctx.params);
  },

  /**
   * Count storydefinition records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.storydefinition.count(ctx.query);
  },

  /**
   * Create a/an storydefinition record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.storydefinition.add(ctx.request.body);
  },

  /**
   * Update a/an storydefinition record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.storydefinition.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an storydefinition record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.storydefinition.remove(ctx.params);
  }
};

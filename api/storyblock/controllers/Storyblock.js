'use strict';

/**
 * Storyblock.js controller
 *
 * @description: A set of functions called "actions" for managing `Storyblock`.
 */

module.exports = {

  /**
   * Retrieve storyblock records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.storyblock.search(ctx.query);
    } else {
      return strapi.services.storyblock.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a storyblock record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.storyblock.fetch(ctx.params);
  },

  /**
   * Count storyblock records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.storyblock.count(ctx.query);
  },

  /**
   * Create a/an storyblock record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.storyblock.add(ctx.request.body);
  },

  /**
   * Update a/an storyblock record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.storyblock.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an storyblock record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.storyblock.remove(ctx.params);
  }
};

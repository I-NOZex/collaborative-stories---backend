'use strict';

/**
 * Wordlist.js controller
 *
 * @description: A set of functions called "actions" for managing `Wordlist`.
 */

module.exports = {

  /**
   * Retrieve wordlist records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wordlist.search(ctx.query);
    } else {
      return strapi.services.wordlist.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wordlist record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.wordlist.fetch(ctx.params);
  },

  /**
   * Count wordlist records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wordlist.count(ctx.query);
  },

  /**
   * Create a/an wordlist record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.wordlist.add(ctx.request.body);
  },

  /**
   * Update a/an wordlist record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wordlist.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wordlist record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wordlist.remove(ctx.params);
  }
};

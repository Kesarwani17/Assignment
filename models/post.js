const knex = require('../db/connection');

const Post = class {
  constructor(data) {
    this.user_id = data.user_id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
  }

  async save() {
    return await knex('posts').insert(this);
  }

  static async getByUserId(userId) {
    return await knex('posts').where('user_id', userId);
  }

  static async getById(postId) {
    return await knex('posts').where('id', postId).first();
  }

  static async update(data) {
    this.title = data.title || this.title;
    this.description = data.description || this.description;
    this.image = data.image || this.image;
    return await knex('posts').where('id', data.id).update(this);
  }

  static async delete(id) {
    return await knex('posts').where('id', id).del();
  }
};

module.exports = Post;

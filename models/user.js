const knex = require('../db/connection');
const bcrypt = require('bcryptjs');

const User = class {
  constructor(data) {
    this.name = data.name;
    this.dob = data.dob;
    this.email = data.email;
    this.password = data.password;
    this.profile_image = data.profile_image;
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return await knex('users').insert(this);
  }

  static async findByEmail(email) {
    return await knex('users').where('email', email).first();
  }
};

module.exports = User;

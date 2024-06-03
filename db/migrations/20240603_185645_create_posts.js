exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('title').notNullable();
    table.text('description');
    table.string('image');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};

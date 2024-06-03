exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.date('dob').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('profile_image');
    table.timestamps(true); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

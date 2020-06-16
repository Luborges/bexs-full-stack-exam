exports.up = function(knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary();
        table.string('text').notNullable();
        table.datetime('creationDate').notNullable();
        table.string('user').notNullable().references('email').inTable('users');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
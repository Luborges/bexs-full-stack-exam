exports.up = function(knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary();
        table.string('text').notNullable();
        table.string('user').notNullable();
        table.datetime('creationDate').notNullable();
        table.integer('user_id').notNullable().references('id').inTable('users');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
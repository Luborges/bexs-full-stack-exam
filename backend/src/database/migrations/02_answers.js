exports.up = function(knex) {
    return knex.schema.createTable('answers', table => {
        table.increments('id').primary();
        table.string('text').notNullable();
        table.datetime('creationDate').notNullable();
        table.string('user').notNullable().references('email').inTable('users');
        table.integer('question_id').notNullable().references('id').inTable('questions');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('answers');
};
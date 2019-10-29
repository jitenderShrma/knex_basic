
exports.up = function(knex) {
    knex.schema.createTable('users', function(table){
        table.increments();
        table.string('name').notNullable;
        table.string('email');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('todos', table => {
        table.increments();
        table.string('title').notNullable;
        table.string('description');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos').dropTable('users');
};


import Knex from 'knex';

//Quais alterações quer realizar no banco de dados;
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    });
};

//Se deu problema, oq fazer pra voltar; Desfaz alterações;
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}
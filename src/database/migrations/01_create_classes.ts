import Knex from 'knex';

//Quais alterações quer realizar no banco de dados;
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

//Se deu problema, oq fazer pra voltar; Desfaz alterações;
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}

exports.up = async function(knex) {

    await knex.schema.createTable('recipes',table=>{
        table.increments('id')
        table.text('name').notNull().unique()
    })
    await knex.schema.createTable('ingredients',table=>{
        table.increments('id')
        table.text('name').notNull()
        
    })

    await knex.schema.createTable('steps',table=>{
        table.increments('id')
        table.text('step1').notNull()
        table.text('step2').notNull()
        table.text('step3').notNull()
        table.integer('recipe_id')
        .references('id')
        .inTable('recipes')
    })


    await knex.schema.createTable('recipes_ingredients',table=>{
        table.integer('recipe_id')
        .notNull()
        .references('id')
        .inTable('recipes')
        table.integer('ingredient_id')
        .notNull()
        .references('id')
        .inTable('ingredients')
        table.text('quantity').notNull()
        table.primary(['recipe_id','ingredient_id'])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};

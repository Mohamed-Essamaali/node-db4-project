const { KnexTimeoutError } = require("knex");

exports.seed = async function(knex) {

  await knex('recipes_ingredients').insert([
    { recipe_id:1,ingredient_id:1,quantity:'1 cup'}
  ])
};

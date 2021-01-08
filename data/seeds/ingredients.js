const { KnexTimeoutError } = require("knex");

exports.seed = async function(knex) {
  
  await knex("ingredients").insert([
    {name: 'floor'},
    {name:'lemon'},
    {name:'olive oil'},
    {name:'roasted garlic'},
    {name:'sour cream'},
    {name:'milk'},
    {name:'butter'},

  ])
};

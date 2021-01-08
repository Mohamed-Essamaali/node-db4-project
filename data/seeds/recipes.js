
exports.seed = async function(knex) {

  await knex('recipes').insert([
    {name: "Appetizers"},
    {name: "Nuts Desserts"},
    {name: "Chicken recipe"},
    {name: "Ground Beef"},
    {name: "Shrimp Lo Mein with Broccoli"},
    {name: "Air Fryer sweet"},
  ])
};

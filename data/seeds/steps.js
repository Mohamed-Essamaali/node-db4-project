
exports.seed = async function(knex) {
 
  await knex('steps').insert([
    {step1:'preheat the oven to 450 degrees', step2:'heat olive oil then add onions', step3:'add spices and keep steering' },
    {step1:'pour milk in bowl', step2:'steer until becomes heavy cream', step3:'put it in fridge for one hour' },
  ])
};

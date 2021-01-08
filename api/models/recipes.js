const db = require('../../data/config-db')

const find=()=>{
return db('recipes')
}

module.exports = {find}
let mongoose = require('mongoose')
 
let personSchema =new mongoose.Schema({
    
    name: {type:String,required: true },
    age :{type:Number} ,
    favoriteFoods :[{type:String}],

})

const person = mongoose.model('Person', personSchema);
module.exports = person

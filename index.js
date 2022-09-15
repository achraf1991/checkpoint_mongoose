let mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config()
const person = require('./person');

//security
const port= process.env.PORT;

//connection to database

const DBconnect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
  
      console.log("Data base is connected");
    } catch (error) {
      console.log(error);
    }
  };

  DBconnect()

//Create and Save a Record of a Model:

const abd = new person ({
  name:  'achraf',
  age: 31,
  favoriteFoods: ["lablebi","pizza"],
});

abd.save()
.then((el)=>console.log(el))
.catch((err) => console.error(err));

app.get('*', (req, res) => {res.end('<h1>mar7abtin</h1>')});

let personSchema=new mongoose.Schema({})

// Create Many Records with model.create()

person.create(
  [
    {
      name: "ali ",
      age: 49,
      favoriteFoods: ["m7amsa", "pizza"],
    },
    {
      name: "sale7 ",
      age: 59,
      favoriteFoods: ["madfouna", "pizza"],
    },
    {
      name: "mas3oud",
      age: 69,
      favoriteFoods: ["ma9arouna", "pizza"],
    },
    {
      name: "lfat7i",
      age: 79,
      favoriteFoods: ["marga", "pizza"],
    },
    {
      name: "mary",
      age: 9,
      favoriteFoods: ["chorba"],
    },
    {
      name: "mary",
      age: 4,
      favoriteFoods: ["dchicha"],
    },
    {
      name: "mary",
      age: 99,
      favoriteFoods: ["m7amsa"],
    },
  ],
  (err, data) => {
    err ? console.log(err) : console.log("add successfully created");
  }
);



// //Use model.find() to Search Your Database

person.find({}, (err, data) => {
  err ? console.log(err) : console.log(data);
});

//Use model.findOne() to Return a Single Matching Document from Your Database

person.findOne({favoriteFoods: ["marga", "pizza"]}, (err, data) => {
  err ? console.log(err) : console.log(data)});


//Use model.findById() to Search Your Database By _id

person.findById({ _id: " 63232e1a8a0f9f9bf453fd2a" }, (err, data) => {
  err ? console.log(err) : console.log(data);
});
 
//Perform Classic Updates by Running Find, Edit, then Save

person.findByIdAndUpdate(
  { _id: " 63232fdc6cee8b7ae15c393a" },
  { $push: { favoriteFoods: " humberger" }
 },
  (err, data) => {
    err ? console.log(err) : console.log(data)});
    // data.save()

//Perform New Updates on a document Using model.findOneAndUpdate()

  

   person.findOneAndUpdate(
    {
      name: 'lfat7i',  
    }, 
    {
      age: 20, 
    },
    {
      new: true,                      
      runValidators: true            
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


//Delete One Document Using model.findByIdAndRemove


person.findOneAndRemove({ _id: " 63234b0d86c38bdb268128bf" })

.then((response) => {
console.log(response);
})
.catch((err) => {
console.error(err);
});


person.find({}, (err, data) => {
err ? console.log(err) : console.log(data);
});


//MongoDB and Mongoose - Delete Many Documents with model.remove()


   
     person.remove({ name: "mary" })

     .then((response) => {
       console.log(response);
     })
     .catch((err) => {
       console.error(err);
     });


//Chain Search Query Helpers to Narrow Search Results

  
    person.find({ favoriteFoods:"pizza"})
    .sort(" name" )
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) => {
      err ? console.log(err) : console.log(data);
    });







app.listen(port, ()=>
{console.log("mare7baa")});
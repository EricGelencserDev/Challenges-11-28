let connection = require('./models/sequelize-connection')
let Sequelize = require ('sequelize')
let Country = require('./models/country')


// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })

  //let Country = require('./models/country')

// Country.findById(1).then(function(country){
//   // Do anything we like with the country object
//   console.log(country.get('name'))
// }).catch(function(error){
//   console.log(error)
// })

// Country.findById(1).then(function(country){
//   console.log(country.get())
// })
 //let Country = require('./models/country')
//
// Country.findById(1).then(function(country){
//   console.log(country.get('name'))
// })


// Country.all().then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

//Maps more than one country?
// Country
//   .all({limit: 2})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })


// //.build allows you to create
// let genovia = Country.build({
//   code: 'GEN',
//   name: 'Genovia',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//
// genovia.save()
//   .then(function(){
//     //whatever you need to do afterwards
//   })
//   .catch(function(error){
//   })

//same as build but saves result??
  let florin = Country.create({
    code: 'GNS',
    name: 'Gilneas',
    continent: 'Eastern Kingdoms',
    region: 'Azeroth'
  })
    .then(function(){
      //whatever you need to do afterwards
    })
    .catch(function(error){
    })
//
//     Country.all({
//   where: {
//     region: 'Make Believe'
//   }
// })
//   .then(function(records){
//     let promises = records.map(function(country){
//       return country.destroy()
//     })
//
//     return Promise.all(promises)
//   })
//   .then(function(results){
//     console.log("They're gone!")
//   })

// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(country){
//     country.region = "Storyland"  // <-- this is where we update its values
//     return country.save() // a promise
//   })
//   .catch(function(error){
//   })

// Country.findAll({
//   where:{
//     region: 'Europe'
//   }
// })

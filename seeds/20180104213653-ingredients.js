'use strict';

let Recipe = require('../models').Recipe

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Recipe.findAll().then(function(lists){ // returns a promise
      let ingredientPromises = lists.map(function(list){
        return queryInterface.bulkInsert('Ingredients',
        [
          {
            name: 'Mayonnaise',
            quantity: '1/4 cup',
            isComplete: false,
            recipeId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Honey',
            quantity: '2 tablespoons',
            isComplete: false,
            recipeId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      })
      return Promise.all(ingredientPromises)
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ingredients', null, {})
  }
};

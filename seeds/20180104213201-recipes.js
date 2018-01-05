'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Recipes',
    [
      {
        id: 1,
        name: 'Chick-Fil-A Sauce',
        items: 6,
        time: 5,
        instructions: '1. Whisk together all ingredients. 2. Store in refrigerator in a closed container.',
        serves: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Polynesian Sauce',
        items: 8,
        time: 5,
        instructions: '1. Whisk together all ingredients. 2. Store in refrigerator in a closed container.',
        serves: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Honey Lemon Glazed Salmon',
        items: 6,
        time: 20,
        instructions: '1. Season salmon. 2. Heat up searing pan. 3. Make honey lemon glazed salmon.',
        serves: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Recipes', null, {})
  }
};

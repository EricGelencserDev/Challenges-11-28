'use strict';

module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    items: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    instructions: DataTypes.STRING,
    serves: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
          Recipe.hasMany(models.Ingredient,{
                    foreignKey: 'recipeId',
                    as: 'ingredients'
          })
      }
    }
  });
  return Recipe;
};

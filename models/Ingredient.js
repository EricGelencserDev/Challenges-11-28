'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
        associate: function(models) {
          Ingredient.belongsTo(models.Recipe,{
            foreignKey: 'recipeId',
            onDelete: 'CASCADE'
          })
        }
    }
  });
  return Ingredient;
};

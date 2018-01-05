var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var app = express();
var Recipe = require('./models').Recipe
var Ingredient = require('./models').Ingredient

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', function (request, response) {
    Recipe.findAll().then(function(recipes){
        response.render('index', {recipes: recipes})
    }).catch(function(err){
        response.send("Error, couldn't fetch recipes")
    })
});

app.get('/recipe-page/:currentRecipe', function(request,response){
    Recipe.findById(request.params.currentRecipe,
        {include: [{
            model: Ingredient,
            as: 'ingredients'
        }]
    }).then(function(recipe){
        response.render('recipe-page', {recipe: recipe, ingredients: recipe.ingredients})
    }).catch(function(err){
        response.send("Error, couldn't fetch TodoList")
    })
})


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

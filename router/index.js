var express = require('express');
var app = express();

app.get('/', function (request, response) {
 response.send('Hello World!');
});

//adds a page that reverses text
app.get('/reverse/:reverseText', function (request, response) {
    var reverseText = request.params["reverseText"]
    var reverseArray = reverseText.split('').reverse().join('');
 response.send(reverseArray);
});

//makes a page that adds to numbers togother
app.get('/add/:a/:b', function (request, response) {
    var a = request.params["a"];
    var b = request.params["b"];
    var result = (parseInt(a)+parseInt(b));
 response.send("this is the result " + result);
});

app.get('/piglatin/:pig', function (request, response) {
    //Declare function main
    function main(a) {
    //Creates empty variable that stores finished work
        var result = [];
    //splits the userInput into an array of words
        a = a.split(" ");
    //Creates a translate function
        var translate = function(x){
    //tag holds the ending that we add
            var tag = "";
    //regexp??????? we did it promise
            var pos = x.search(/[aieou]/i);
    //pos looks for a e i o u and ends at cons. before vowel
    //pos holds postion of the letter
            if(pos == 0){
    //If word starts with a vowel, just add way to the end of it
                tag = "way";
    //returns word with ay at the end
                return x + tag;
    //if word does not start with vowel, piglatin it
            }else if(pos > 0){
    //cuts out all char. before vowel
                tag = x.slice(0,pos);
    //adds tag to the end of word and returns it
                return x.slice(pos) + tag + "ay";
            }
        }
    //runs for each index in array and saves to result
        for(let iter = 0; iter < a.length; iter++){
            result.push(translate(a[iter]));
        }
    //returns new piglatin word
        var piggy = result.join(" ");
        return piggy;
    }
    // end main

    var pig = request.params["pig"];

 response.send("this is your response in piglatin " + main(pig));
});

app.listen(process.argv[2], function () {
 console.log('Example app listening on port 3001!');
});

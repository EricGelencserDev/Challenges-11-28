var express = require('express');
var app = express();
app.use(express.static('public'));  //tell Express that well keep files in the /public directory
app.set('view engine', 'ejs');

var questions = {
  'coronado-bridge':{
    question: "Who was the first person to ever drive over the Coronado bridge?",
    answer: "Ronald Reagan",
    image: "/images/ronald.jpeg"
  },
  'hotel-del':{
    question: "Want to hear a joke about paper?",
    answer: " Nevermind it’s tearable.",
    image:"/images/paper-cat.jpg"
  },
  'san-diego-county-fair':{
    question: "What did the ocean say to the boat?",
    answer: "Nothing, it just waves.",
    image:"/images/waves.jpg"
  },
  'mission-bay':{
    question: "What did the pirate say with a steering wheel in his pants?",
    answer: "AARRGG, this is driving me nuts!",
    image:"/images/pirate.jpg"
  },
  'la-jolla-playhouse':{
    question: "How does NASA orginize a party?",
    answer: "They Planet!",
    image:"/images/planet.jpg"
  },
'dad-joke':{
  question: "what state has the smallest sodas",
  answer: "mini-soda",
  image:"/images/mini-soda.jpg"
  },
};

// app.get ('/', function (request, respond){
//     respond.render('home')
// });

app.get('/', function (request, response) {
  response.render('index', {'questions': questions});
});


app.get('/trivia/:question', function(request, response){
  var questionKey = request.params.question;
  var triviaQuestion = questions[questionKey];
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer , 'image': triviaQuestion.image});
});


app.listen (3000, function (){
    console.log("this is working")
});

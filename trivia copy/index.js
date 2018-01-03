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
    question: "What is the largest wooden structure in the United States?  (Hint, its located in San Diego)",
    answer: "Hotel Del Coronado",
    image:"/images"
  },
  'san-diego-county-fair':{
    question: "What was the original name of the San Diego County Fair?",
    answer: "Del Mar Fair",
    image:"/images"
  },
  'mission-bay':{
    question: "How many visitors come to Mission Bay Park every year?",
    answer: "More than 5 million",
    image:"/images"
  },
  'la-jolla-playhouse':{
    question: "What famous actor founded the La Jolla Playhouse?",
    answer: "Gregory Peck",
    image:"/images"
  },
'dad-joke':{
  question: "what state has the smallest sodas",
  answer: "mini-soda",
  image:"/images"
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

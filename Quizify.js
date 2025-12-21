//Use this code in REPLIT..



let readlineSync = require ("readline-sync");

let kuler = require('kuler'); //kuler is a package which is used to print text in different colors

let user_name = readlineSync.question("Enter your name: ");

console.log(kuler(`\n Hello ${user_name} Welcome to the Quizify \n\n`, '#38bdf8'));



/**Creating Data set */

const data_base = {
  category : {
    name : "JavaScript",

    date : [
      {
        question : `Let a={}, b={}
        console.log(a==b)
        console.log(a===b)`,
        options : {
           a: "true, true",
           b: "true, false",
           c: "false, true",
           d: "false, false"
        },
        correct_answer : "d"
      },

      {
        question : "Object.assign(target, source) creates which type of copy ?",
        options : {
           a: "Deep Copy",
           b: "Shallow Copy",
           c: "None of the above",
           d: "Copy Constructor"
        },
        correct_answer : "b"
      },

      {
        question : "Which of the following is not javascript data types ?",
        options : {
           a: "Null type",
           b: "Undefined type",
           c: "Number type",
           d: "All of the above"
        },
        correct_answer : "d"
      }
    ]
  }
} ;


// Leader Board

const leader_board = {
   data : [
     {
       name : "Raj",
       score : 3 
     },
     {
       name : "Ravi",
       score : 2
     },
     {
       name : "Rahul",
       score : 1
     }
   ]
};




let score = 0;


// Answer checking function

function play_quiz(user_answer, correct_answer)
{
    if (user_answer === correct_answer)
    {
      console.log(kuler("Great!! Your Answer is correct 🥳🥳🥳 ","#16a34a"));
      score++;
      console.log(`\nYour current score is ${score} \n\n\n`);
    }
    else
    {
      console.log(kuler("Sorry!! Its Wrong Answer 😔😔😔","#dc2626"));
      console.log(`\nYour current score is ${score} \n\n\n`);
    }
}


// Showing question and options

function show_question_and_options()
{
   for(let i=0; i<data_base.category.date.length; i++)
     {
       console.log(`${(i+1)}. ${data_base.category.date[i].question} \n`);
       for (let key in data_base.category.date[i].options)
         {
           console.log(`${key}. ${data_base.category.date[i].options[key]}`);
         }
       
       let user_answer = readlineSync.question("\n Enter your answer (a/b/c/d): ").toLowerCase();

       console.log("");
       

       play_quiz(user_answer, data_base.category.date[i].correct_answer);
     }
}



// Showing Leader Board

function show_leader_board(leader_board)
{
  leader_board.data.push({name: user_name, score: score});

  let sorted_list = leader_board.data.sort((a, b) => b.score - a.score);

  console.log("Leader Board : \n\n");

  for(let i=0; i<sorted_list.length; i++)
    {
      console.log(`${(i+1)}. ${sorted_list[i].name}  - ${sorted_list[i].score}`);
    }
}



show_question_and_options();

console.log(kuler(`Your final score is ${score} \n\n`,'#facc15'));

show_leader_board(leader_board);

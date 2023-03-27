// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: [
      "&lt;scripting&gt;",
      "&lt;script&gt;",
      "&lt;javascript&gt;",
      "&lt;js&gt;"
    ]
  },
    {
    numb: 2,
    question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
    answer: `<script src="xxx.js">`,
    options: [
      `&lt;script src="xxx.js"&gt;`,
      `&lt;script href="xxx.js"&gt;`,
      `&lt;script name="xxx.js"&gt;`,
      `&lt;script class="xxx.js"&gt;`
    ]
  },
  {
    numb: 3,
    question:"Which of the following is not a primitive data type in JavaScript?",
    answer: "array",
    options: [
      "string",
      "array",
      "boolean",
      "number"
    ]
  },
    {
    numb: 4,
    question: "Where is the correct place to insert a JavaScript?",
    answer: "Both the <head> section and the <body> section are correct",
    options: [
      "The &lt;head&gt; section",
      "The &lt;body&gt; section",
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
      "All of the above"
    ]
  },
    {
    numb: 5,
    question: `How do you write "Hello World" in an alert box?`,
    answer: `alert("Hello World");`,
    options: [
      `alertBox("Hello World");`,
      `alert("Hello World");`,
      `msgBox("Hello World");`,
      `msg("Hello World"); `
    ]
  },
  {
    numb: 6,
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction()",
    options:[
      "function = myFunction()",
      "function:myFunction()",
      "function()",
      "function myFunction()"
    ]
  },
  {
  numb: 7,
  question: `How do you call a function named "myFunction"?`,
  answer: "myFunction()",
  options: [
    "Function()",
    "call function myFunction()",
    "call myFunction()",
    "myFunction()"
  ]
},
  {
  numb: 8,
  question: "How to write an IF statement in JavaScript?",
  answer: "if (i == 5)",
  options: [
    "if (i == 5)",
    "if i = 5",
    "if i == 5 then",
    "if i = 5 then"
  ]
},
{
  numb: 9,
  question: "Which of the following is used to declare a variable in javaScript?",
  answer: "All of the above",
  options: [
    "var",
    "let",
    "const",
    "All of the above"
  ]
},

{
  numb: 10,
  question: "Which of the following is the correct syntax for a for loop in JavaScript?",
  answer: "for(i=0; i<5; i++)",
  options: [
    "for(i<5;i++)",
    "for(i=0; i<5; i++)",
    "for(i=5; i>0; i--)",
    "for(i<5; i++)"
  ]
},
{
  numb: 11,
  question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
  answer: "if (i != 5)",
  options: [
    "if (i != 5)",
    "if i <> 5",
    "if i =! 5 then",
    "if (i <> 5)"
  ]
},
{
  numb: 12,
  question: "How does a WHILE loop start?",
  answer: "while (i <= 10)",
  options: [
    "While()",
    "while i = 1 to 10",
    "while (i <= 10)",
    "while (i <= 10; i++)"
  ]
},
{
  numb: 13,
  question: "How to insert a comment that has more than one line?",
  answer: "/*This comment has more than one line*/",
  options: [
    "/*This comment has more than one line*/",
    "//This comment has more than one line//",
    "&lt;!--This comment has more than one line!--&gt;",
    "/This comment has more than one line/"
  ]
},
{
  numb: 14,
  question: "What is the correct way to write a JavaScript array?",
  answer: `var colors = ["red", "green", "blue"]`,
  options: [
    `var colors = (1:"red", 2:"green", 3:"blue")`,
    `var colors = (1:"red", 2:"green", 3:"blue")`,
    `var colors = ["red", "green", "blue"]`,
    `var colors = "red", "green", "blue"`
  ]
},
{
  numb: 15,
  question: "How do you round the number 7.25, to the nearest integer?",
  answer: "Math.round(7.25)",
  options: [
    "round(7.25)",
    "Math.round(7.25)",
    "rnd(7.25)",
    "Math.rnd(7.25)"
  ]
},
{
  numb: 16,
  question: "How do you find the number with the highest value of x and y?",
  answer: "Math.max(x, y)",
  options: [
    "top(x, y)",
    "ceil(x, y)",
    "Math.ceil(x, y)",
    "Math.max(x, y)"
  ]
},
{
  numb: 17,
  question: "How can you detect the client's browser name?",
  answer: "navigator.appName",
  options: [
    "navigator.appName",
    "client.navName",
    "browser.name",
    "None of the above"
  ]
},
{
  numb: 18,
  question: "Which event occurs when the user clicks on an HTML element?",
  answer: "onclick",
  options: [
    "onmouseclick",
    "onmouseover",
    "onclick",
    "onchange"
  ]
},
{
  numb: 19,
  question: "How do you declare a JavaScript variable?",
  answer: "var carName;",
  options: [
    "var carName;",
    "variable carName;",
    "v carName;",
    "vr carName;"
  ]
},
{
  numb: 20,
  question: "Which operator is used to assign a value to a variable?",
  answer: "=",
  options: [
    "x",
    "*",
    "=",
    "-"
  ]
},
{
  numb: 21,
  question: "What is the output of the following code snippet?console.log(typeof null);?",
  answer: `"object"`,
  options: [
    `"null"`,
    `"object"`,
    `"undefined"`,
    `"string"`
  ]
},
{
  numb: 22,
  question: `What is the output of the following code snippet?console.log("5" + 5);?`,
  answer: `"55"`,
  options: [
    `"10"`,
    `10`,
    `"55"`,
    `5`
  ]
},
{
  numb: 23,
  question: `What is the output of the following code snippet?console.log(2 == "2");?`,
  answer: "true",
  options: [
    "true",
    "false",
    "TypeError",
    "syntaxError"
  ]
},
{
  numb: 24,
  question: `What is the output of the following code snippet?console.log(1 + true);`,
  answer: "1",
  options: [
    "true",
    "false",
    "2",
    "1"
  ]
},
{
  numb: 25,
  question: `What is the output of the following code snippet?console.log(typeof NaN);`,
  answer: "number",
  options: [
    "number",
    "NaN",
    "undefined",
    "object"
  ]
},
  
];
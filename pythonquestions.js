// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the correct file extension for Python files?",
    answer: ".py",
    options: [
      ".python",
      ".py",
      ".pyth",
      "pyt"
    ]
  },
    {
    numb: 2,
    question: "How do you create a variable with the numeric value 5?",
    answer: "Both the answer are correct",
    options: [
      "x=5",
      "x=int(5)",
      "Both the answer are correct",
      "Both the answer are wrong"
    ]
  },
    {
    numb: 3,
    question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
    answer: "strip()",
    options: [
       "trim()",
       "len()",
       "ptrim()",
       "strip()"
    ]
  },
    {
    numb: 4,
    question: "Which method can be used to return a string in upper case letters?",
    answer: "upper()",
    options: [
      "toUpperCase()", 
      "upperCase()",
      "uppercase()",
      "upper()"  
    ]
  },
    {
    numb: 5,
    question: "Which method can be used to replace parts of a string?",
    answer: "replace()",
    options: [
      "replace()", 
      "replaceString()",
      "switch()",
      "repl()"
    ]
  },
  {
    numb: 6,
    question: "Which operator can be used to compare two values?",
    answer: "==",
    options:[
      "=",
      "==",
      "&lt;&gt;",
      "&gt;&lt;"
    ]
  },
  {
  numb: 7,
  question: "Which of these collections defines a LIST?",
  answer: `["apple", "banana", "cherry"]`,
  options: [
    `("apple", "banana", "cherry")`,
    `{"apple", "banana", "cherry"}`,
    `["apple", "banana", "cherry"]`,
    `{"name": "apple", "color": "green"}`
  ]
},
  {
  numb: 8,
  question: "Which collection is ordered, changeable, and allows duplicate members?",
  answer: "LIST",
  options: [
    "LIST",
    "SET",
    "TUPLE",
    "DICTIONARY"
  ]
},
{
  numb: 9,
  question: "Which collection does not allow duplicate members?",
  answer: "SET",
  options: [
    "TUPLE",
    "LIST",
    "SET",
    "All of the above"
  ]
},
{
  numb: 10,
  question: "Which of these collections defines a SET?",
  answer: `{"apple", "banana", "cherry"}`,
  options: [
    `("apple", "banana", "cherry")`,
    `{"apple", "banana", "cherry"}`,
    `["apple", "banana", "cherry"]`,
    `{"name": "apple", "color": "green"}`
  ]
},

{
  numb: 11,
  question: "How do you start writing an if statement in Python?",
  answer: "if x > y:",
  options: [
    "if x > y:",     
    "if x > y then:",
   "if (x > y)",
   "SyntaxError"
  ]
},
{
  numb: 12,
  question: "Which of the following Python statement is used to create a new list?",
  answer: "list()",
  options: [
    "list()",
    "new_list()",
    "create_list()",
    "make_list()"
  ]
},
{
  numb: 13,
  question: "Which of the following is not a valid Python data type?",
  answer: "character",
  options: [
    "int",
    "float",
    "character",
    "boolean"
  ]
},
{
  numb: 14,
  question: "Which of these collections defines a DICTIONARY?",
  answer: `{"name": "apple", "color": "green"}`,
  options: [
    `("apple", "banana", "cherry")`,
    `{"apple", "banana", "cherry"}`,
    `["apple", "banana", "cherry"]`,
    `{"name": "apple", "color": "green"}`
  ]
},
{
  numb: 15,
  question: "Which of the following is a correct way to define a function in Python?",
  answer: "def my_function():",
  options: [
    "function my_function():",
    "def my_function():",
    "function my_function:",
    "def my_function:"
  ]
},
{
  numb: 16,
  question: "How do you start writing a while loop in Python?",
  answer: "while x > y:",
  options: [
    "while x > y:",
    "while x > y {",
    "x > y while {",
    "while (x > y)"
  ]
},
{
  numb: 17,
  question: "How do you start writing a for loop in Python?",
  answer: "for x in y:",
  options: [
    "for x > y:",
    "for each x in y:",
    "for x in y:",
    "for()"
  ]
},
{
  numb: 18,
  question: "Which of these collections defines a Tuple?",
  answer: `("apple", "banana", "cherry")`,
  options: [
    `("apple", "banana", "cherry")`,
    `{"apple", "banana", "cherry"}`,
    `["apple", "banana", "cherry"]`,
    `{"name": "apple", "color": "green"}`
  ]
},
{
  numb: 19,
  question: "Which statement is used to stop a loop?",
  answer: "break",
  options: [ 
    "exit",
    "break",
    "stop",
    "return"
  ]
},
{
  numb: 20,
  question: "What is a correct syntax to return the first character in a string?",
  answer: `x = "Hello"[0]`,
  options: [
    `x = "Hello".sub(0, 1)`,
    `x ="hello()"`,
    `x = sub("Hello", 0, 1)`,
    `x = "Hello"[0]`
  ]
},
{
  numb: 21,
  question: "What is the correct syntax to output the type of a variable or object in Python?",
  answer: "print(type(x))",
  options: [ 
    "print(type(x))",
    "print(typeof(x))",
    "print(typeOf(x))",
    "print(typeof x)"
  ]
},
{
  numb: 22,
  question: "How do you create a variable with the floating number 2.8?",
  answer: "Both the other answers are correct",
  options: [ 
    "x = 2.8",
    "x = float(2.8)",
    "Both the other answers are correct",
    "StyntaxError"
  ]
},
{
  numb: 23,
  question: "Which one is NOT a legal variable name?",
  answer: "my-var",
  options: [ 
    "_myvar",
    "my-var",
    "Myvar",
    "my_var"
  ]
},
{
  numb: 24,
  question: "Which of the following is a valid way to open a file in Python?",
  answer: "All of the above",
  options: [ 
    `file = open("myfile.txt")`,
    `file = open("myfile.txt", "w")`,
    `file = open("myfile.txt", "r")`,
    "All of the above"
  ]
},
{
  numb: 25,
  question: `What is the output of the following code?x = 5,y = "Hello",print(x + y)`,
  answer: `TypeError: unsupported operand type(s) for +: 'int' and 'str'`,
  options: [ 
    `5Hello`,
    `Hello5`,
    `TypeError: unsupported operand type(s) for +: 'int' and 'str'`,
    `SyntaxError: invalid syntax`
  ]
},
];
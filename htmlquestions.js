// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What is the correct HTML for creating a hyperlink?",
    answer: "<a>",
    options: [
      "&lt;link&gt;",
      "&lt;url&gt;",
      "&lt;a&gt;",
      "&lt;href&gt;"
    ]
  },
    {
    numb: 3,
    question: "Which HTML tag is used to create a list?",
    answer: "<li>",
    options: [
      "&lt;ol&gt;",
      "&lt;li&gt;",
      "&lt;ul&gt;",
      "All of the above"
    ]
  },
    {
    numb: 4,
    question: "Which HTML tag is used to create a form?",
    answer: "<form>",
    options: [
      "&lt;input&gt;",
      "&lt;button&gt;",
      "&lt;lable&gt;",
      "&lt;form&gt;"
    ]
  },
    {
    numb: 5,
    question: "Which HTML attribute is used to specify the target of a form submission?",
    answer: "action",
    options: [
       "action",
       "target",
       "method",
       "none of the above"
    ]
  },
  {
    numb: 6,
    question: "Which HTML tag is used to create a navigation menu?",
    answer: "<nav>",
    options:[
      "&lt;input&gt;",
      "&lt;section&gt;",
      "&lt;nav&gt;",
      "&lt;footer&gt;"
    ]
  },
  {
  numb: 7,
  question: "Which HTML attribute is used to set the background color of an element",
  answer: "style",
  options: [
    "bgcolor",
    "backgroungcolor",
    "color",
    "style"
  ]
},
  {
  numb: 8,
  question: "Which HTML tag is used to create a table header?",
  answer: "<th>",
  options: [
    "&lt;thead&gt;",
    "&lt;td&gt;",
    "&lt;th&gt;",
    "&lt;tr&gt;"
  ]
},
{
  numb: 9,
  question: "Which HTML attribute is used to specify the URL of an image?",
  answer: "src",
  options: [
    "id",
    "href",
    "alt",
    "src"
  ]
},

{
  numb: 10,
  question: "Which HTML tag is used to create a line break?",
  answer: "<br>",
  options: [
    "&lt;b&gt;",
    "&lt;br&gt;",
    "&lt;hr&gt;",
    "&lt;a&gt;"
  ]
},
{
  numb: 11,
  question: "Which HTML tag is used to define a section of a document?",
  answer: "All of the above",
  options: [
    "&lt;article&gt;",
    "&lt;section&gt;",
    "&lt;div&gt;",
    "All of the above"
  ]
},
{
  numb: 12,
  question: "Which HTML attribute is used to specify the URL of a webpage to be linked?",
  answer: "href",
  options: [
    "href",
    "src",
    "alt",
    "None of this"
  ]
},
{
  numb: 13,
  question: "Which HTML tag is used to create a table?",
  answer: "All of the above",
  options: [
    "&lt;tr&gt;",
    "&lt;table&gt;",
    "&lt;td&gt;",
    "All of the above"
  ]
},
{
  numb: 14,
  question: "Which tag is used for creating a dropdown list in HTML?",
  answer: "<select>",
  options: [
    "&lt;option&gt;",
    "&lt;input type =`dropdown`&gt;",
    "&lt;select&gt;",
    "None of the above"
  ]
},
{
  numb: 15,
  question: "Which tag is used for adding a line across the width of an HTML document?",
  answer: "<hr>",
  options: [
    "&lt;p&gt;",
    "&lt;hr&gt;",
    "&lt;div&gt;",
    "&lt;br&gt;"
  ]
},  
{
  numb: 16,
  question: "Choose the correct HTML element to define important text?",
  answer: "<strong>",
  options: [
    "&lt;important&gt;",
    "&lt;i&gt;",
    "&lt;b&gt;",
    "&lt;strong&gt;"
  ]
}, 
{
  numb: 17,
  question: "Which character is used to indicate an end tag?",
  answer: "/",
  options: [
    "/",
    "*",
    "<",
    "`\`"
  ]
}, 
{
  numb: 18,
  question: "How can you make a numbered list?",
  answer: "<ol>",
  options: [
    "&lt;ul&gt;",
    "&lt;li&gt;",
    "&lt;ol&gt;",
    "&lt;list&gt;"
  ]
},
{
  numb: 19,
  question: "What is the correct HTML for making a checkbox?",
  answer: "<input type = `checkbox`>",
  options: [
    "&lt;input type=`check`&gt;",
    "&lt;checkbox&gt;",
    "&lt;check&gt;",
    "&lt;input type = `checkbox`&gt;"
  ]
},
{
  numb: 20,
  question: "What is the correct HTML for making a text area?",
  answer: "<textarea>",
  options: [
    "&lt;textarea&gt;",
    "&lt;input type = `textarea`&gt;",
    "None of the above",
    "&lt;tinput type = `checkbox`&gt;"
  ]
},
{
  numb: 21,
  question: "Which doctype is correct for HTML5?",
  answer: "<!DOCTYPE html>",
  options: [
    "&lt;!DOCTYPE HTML5&gt",
    "&lt;!DOCTYPE HTML PUBLIC `-W3C//DTD HTML 5.0//EN` `http://www.w3.org/TR/html5/strict.dtd`>&gt",
    "&lt;!DOCTYPE&gt;",
    "&lt;!DOCTYPE html&gt"
  ]
},
{
  numb: 22,
  question: "Which input type defines a slider control?",
  answer: "range",
  options: [
    "range",
    "controls",
    "slider",
    "search"
  ]
},
{
  numb: 23,
  question: "How can you make a bulleted list?",
  answer: "<ul>",
  options: [
    "&lt;list&gt;",
    "&lt;li&gt;",
    "&lt;ol&gt;",
    "&lt;ul&gt;"
  ]
},
{
  numb: 24,
  question: "In HTML, which attribute is used to specify that an input field must be filled out?",
  answer: "required",
  options: [
    "required",
    "validate",
    "palceholder",
    "formvalidate"
  ]
},
{
  numb: 25,
  question: "Which tag is used for adding an image to an HTML document?",
  answer: "<img>",
  options: [
    "&lt;image&gt;",
    "&lt;input&gt;",
    "&lt;img&gt;",
    "&lt;audio&gt;"
  ]
},];
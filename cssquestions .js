// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 2,
    question: "How do you select elements with class name 'test'?",
    answer: ".test",
    options: [
        ".test",
        "*test",
        "test",
        "#test"
    ]
  },
    {
    numb: 3,
    question: "How do you select an element with id 'demo'?",
    answer: "#demo",
    options: [
      "demo",
      "*demo",
      "#demo",
      ".demotest"
    ]
  },
    {
    numb: 4,
    question: "How do you make each word in a text start with a capital letter?",
    answer: "text-transform:capitalize",
    options: [
      "text-style:capitalize",
      "transform:capitalize",
      "text-transform:capitalize",
      "You can't do that with CSS"
    ]
  },
    {
    numb: 5,
    question: "How do you insert a comment in a CSS file?",
    answer: "/* this is a comment */",
    options: [
      "// this is a comment //",
      "' this is a comment",
      "// this is a comment",
      "/* this is a comment */"
    ]
  },
  {
    numb: 6,
    question: "Which property is used to change the background color?",
    answer: "background-color",
    options:[
      "background-color",
      "color",
      "bgcolor",
      "All of the above"
    ]
  },
  {
  numb: 7,
  question: "Which CSS property is used to set the font size?",
  answer: "font-size",
  options: [
    "color",
    "font-weight",
    "size",
    "font-size"
  ]
},
  {
  numb: 8,
  question: "Which HTML attribute is used to define inline styles?",
  answer: "style",
  options: [
    "styles",
    "style",
    "Css",
    "class"
  ]
},
{
  numb: 9,
  question: "Which is the correct CSS syntax?",
  answer: "body{color: black;}",
  options: [
   "{body:color=black;}",
   "{body;color:black;}",
   "body:color=black;",
   "body{color: black;}"
  ]
},

{
  numb: 10,
  question: "Which CSS property is used to create rounded corners?",
  answer: "border-radius",
  options: [
  "border-radius",
  "border-style",
  "border-width",
  "border"
  ]
},
{
  numb: 11,
  question: "Where in an HTML document is the correct place to refer to an external style sheet?",
  answer: "In the <head> section",
  options: [
    "In the &lt;head&gt; section",
    "In the &lt;body&gt; section",
    "In the &lt;footer&gt; section",
    "At the end of the document"
  ]
},
{
  numb: 12,
  question: "Which CSS property is used to create a shadow effect around an element?",
  answer: "box-shadow",
  options: [
    "text-shadow",
    "element-shadow",
    "border-shadow",
    "box-shadow"
  ]
},
{
  numb: 13,
  question: "Which CSS property is used to set the height of the Element?",
  answer: "All of the above",
  options: [
    "height",
    "min-height",
    "max-height",
    "All of the above"
  ]
},
{
  numb: 14,
  question: "Which CSS property is used to control the transparency of an element?",
  answer: "Opacity",
  options: [
    "Opacity",
    "Transparency",
    "Visibility",
    "Blur"
  ]
},
{
  numb: 15,
  question: "Which of the following CSS properties can be used to make text wrap around an image?",
  answer: "float",
  options: [
    "position",
    "float",
    "clear",
    "display"
  ]
},
{
  numb: 16,
  question: "Which CSS property is used to create a responsive design that adjusts to different screen sizes?",
  answer: "media queries",
  options: [
    "grid",
    "flexbox",
    "media queries",
    "viewport units"
  ]
},
{
  numb: 17,
  question: "Which of the following CSS units is relative to the font size of the root element?",
  answer: "rem",
  options: [
    "em",
    "rem",
    "px",
    "vh"
  ]
},
{
  numb: 18,
  question: "Which CSS property is used to create an animation effect on an element?",
  answer: "animation",
  options: [
    "animation",
    "transform",
    "transition",
    "All of the above"
  ]
},
{
  numb: 19,
  question: "Which of the following CSS units is relative to the viewport width?",
  answer: "vw",
  options: [
    "em",
    "px",
    "rem",
    "vw"
  ]
},
{
  numb: 20,
  question: "Which CSS property is used to define the maximum width of an element?",
  answer: "max-width",
  options: [
    "width",
    "max-width",
    "min-width",
    "All of the above "
  ]
},
{
  numb: 21,
  question: "Which CSS property is used to hide an element on smaller screens?",
  answer: "display:none;",
  options: [
    "display:none;",
    "opacity:0",
    "visibility:hidden",
    "All of the above"
  ]
},
{
  numb: 22,
  question: "Which of the following is a common breakpoint for a responsive design?",
  answer: "All of the above",
  options: [
    "1080px",
    "850px",
    "1200px",
    "All of the above"
  ]
},
{
  numb: 23,
  question: "Which of the following CSS properties can be used to adjust the spacing between elements?",
  answer: "All of the above",
  options: [
    "gap",
    "margin",
    "padding",
    "All of the above"
  ]
},
{
  numb: 24,
  question: "Which CSS property is used to create a gradient text effect?",
  answer: "None of the above",
  options: [
    "text-gradient",
    "shadow",
    "text-fill-color",
    "None of the above"
  ]
},
{
  numb: 25,
  question: "Which of the following CSS selectors is used to apply styles to an element when the mouse pointer hovers over it?",
  answer: ":hover",
  options: [
    ":active",
    ":hover",
    ":focus",
    "None of the above"
  ]
},
];
const quiz=[
    {
      "question": "What does HTML stand for?",
      "HyperText Markup Language": true,
      "Hyperlink Markup Language": false,
      "Home Tool Markup Language": false,
      "Hyperlinks and Text Markup Language": false
    },
    {
      "question": "Which tag is used to define a hyperlink in HTML?",
      "a": true,
      "link": false,
      "href": false,
      "url": false
    },
    {
      "question": "What does CSS stand for?",
      "Computer Style Sheets": false,
      "Cascading Style Sheets": true,
      "Creative Style Sheets": false,
      "Colorful Style Sheets": false
    },
    {
      "question": "Which property is used to change the background color in CSS?",
      "color": false,
      "background-color": true,
      "bgcolor": false,
      "color-background": false
    },
    {
      "question": "What is the correct JavaScript syntax to write 'Hello World' to the console?",
      "print('Hello World')": false,
      "console.print('Hello World')": false,
      "console.log('Hello World')": true,
      "log.console('Hello World')": false
    },
    {
      "question": "Which HTML attribute is used to define the background color of a page?",
      "background-color": false,
      "bgcolor": true,
      "background": false,
      "color": false
    },
    {
      "question": "How do you write a comment in JavaScript?",
      "// This is a comment": true,
      "&lt;!-- This is a comment -->": false,
      "# This is a comment": false,
      "/* This is a comment */": false
    },
    {
      "question": "Which tag is used to display images in HTML?",
      "img": true,
      "image": false,
      "picture": false,
      "src": false
    },
    {
      "question": "Which of the following is NOT a valid CSS unit?",
      "px": false,
      "em": false,
      "pt": false,
      "cmd": true
    },
    {
      "question": "Which event occurs when the user clicks on an HTML element in JavaScript?",
      "onhover": false,
      "onclick": true,
      "onmouseclick": false,
      "onfocus": false
    }
  ];

function calculate(){
    som=0
    inputs=document.getElementsByTagName("input")
    for(i=0;i<40;i++){
        if(inputs[i].checked)
            if(inputs[i].value=="true"){
                som+=1
                inputs[i].parentElement.style.backgroundColor="RGB(102, 204, 102,0.5)"
            }
            else
                inputs[i].parentElement.style.backgroundColor="RGB(255, 102, 102,0.5)"
        inputs[i].disabled=true
    }
    document.getElementById("score").innerHTML="Your score is "+som+"/10"
    window.location.href = '#score';
}

function init(){
    document.getElementById("quiz-container").innerHTML=""
    document.getElementById("score").innerHTML=""
    for(i=0;i<10;i++){
        document.getElementById("quiz-container").innerHTML+="<strong>"+quiz[i]["question"]+"</strong><br/>"
        for(const [key, value] of Object.entries(quiz[i]))
            if(key!="question"){
                if(value)
                    document.getElementById("quiz-container").innerHTML+="<div><input type='radio' name='question"+i+"' value='true'/><label>"+key+"</label></div>"
                else
                    document.getElementById("quiz-container").innerHTML+="<div><input type='radio' name='question"+i+"' value='false'/><label>"+key+"</label><br/></div>"
            }
    }
    document.getElementById("quiz-container").innerHTML+="<button onClick='calculate()' id='submit'>Submit</button><button id='reset' onClick='init()'>Reset</button>"
}
var textField = $('.InputBox');
var submitButton = $('.Submit');
var diaryEntry = $('.diaryEntry');

//var for button
var classic = $('.classic');
var zenMode = $('.zenMode');
var spacedOut = $('.spacedOut');
var darkMode = $('.darkMode');
var body = $('body');
var footer = $('.footer');



submitButton.on("click", addEntry);


//event caller for mode buttons
classic.on("click", classicColor);
zenMode.on("click", zenModeColor);

function classicColor(){
body.css("background-color","white");
classic.css("background-color","#eae4e9");
zenMode.css("background-color","#eae4e9");
spacedOut.css("background-color","#eae4e9");
darkMode.css("background-color","#eae4e9");
textField.css("background-color","#dfe7fd");
footer.css("background-color", "#cddafd");

}
function zenModeColor(){
  body.css("background-color","#e9edc9");
  classic.css("background-color","#faedcd");
  zenMode.css("background-color","#faedcd");
  spacedOut.css("background-color","#faedcd");
  darkMode.css("background-color","#faedcd");
  textField.css("background-color","#ccd5ae");
  footer.css("background-color", "#fefae0");
}

function addEntry(){
  var text = textField.val();
//append to update our taskList var 
diaryEntry.append(`<div class = "EntryCon"><div class = "Entry">
<p>${text}</p></div></div>`);

}


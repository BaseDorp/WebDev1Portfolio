let lines = [];

let poem = document.getElementById("input");
let button = document.getElementById("enterButton");
let inputField = document.getElementById("inputField");
let poemResult = document.getElementById("poemResult");

function AddLine()
{
    // Gets the string from the input field
    let inputString = inputField.value;
    // adds the string to the array of poem lines
    lines.push(inputString);

    // Adds the text to the string
    poemResult.innerHTML += inputString + ("<br>");
};
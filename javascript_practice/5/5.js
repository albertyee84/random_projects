// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.Go to the editor

let string = "w3resource";

function animateString() {
  string = string[string.length - 1] + string.substring(0, string.length - 1);
  console.log(string);
}

setInterval(animateString, 1000);

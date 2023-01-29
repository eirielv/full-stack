let value = 0;
let hider = true;
let hiddenText = "";


function incrementButton() {
    number1 = document.getElementById('count');
    value = number1.innerHTML;
    value++;
    document.getElementById('count').innerHTML = value;
}

function decrementButton() {
    number2 = document.getElementById('count');
    value = number2.innerHTML;
    value--;
    document.getElementById('count').innerHTML = value;
}

function hideText() {
  var x = document.getElementById("hide_text");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}


function randomWord(){
    randomInt = Math.floor(Math.random() * 5);
    const words = ["hei","hade","funk","Eirik","Gunnar","Fisk"];

    //var elementWord = document.getElementById("random-word");
    let innhold = document.getElementById("random-word-liste");

    for(let i=0 ; i <= words.length; i++){
        let li = document.createElement("li")
        li.innerHTML = words[i];
        li.className = "listElement"
        innhold.appendChild(li);
    }

}
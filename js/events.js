const resultBox = document.getElementById("result");
resultBox.innerText = "Wypożyczalnia KORONA\n";

const buttons = document.querySelectorAll(".button");
for(const button of buttons){
    console.log(button);
    button.addEventListener("click", event => console.log(event.target.innerText));
}

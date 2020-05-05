const resultBox = document.getElementById("result");
resultBox.innerText = "Wypożyczalnia KORONA\n";

class ColorState{
    constructor(color="red") {
        this.color = color;
        this.swapColor = event => {
            const nextColor = this.color;
            this.color = event.target.style.backgroundColor;
            event.target.style.backgroundColor = nextColor;
        }
    }
}

const buttons = document.querySelectorAll(".button");
for(const button of buttons){
    const status = new ColorState("blue");
    button.addEventListener("mouseenter", status.swapColor);
    button.addEventListener("mouseout", status.swapColor);
}

const btnGen = document.querySelector("#btn-gen-game");
const gridElement = document.querySelector("#grid")

btnGen.addEventListener("click", genGrid);

function genGrid() {
    gridElement.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.innerText = i + 1;

        newElement.addEventListener("click", function () {

            console.log(this.innerText);
            this.classList.toggle("clicked");
        });

        gridElement.append(newElement);
    }
}

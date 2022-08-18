const grid = document.querySelector("#grid"); //creating a variable for the 'grid' div
const draw = document.querySelector("#drawBtn")
const reset = document.querySelector("#reset"); // creating a variable for the 'reset' button
const changeSize = document.querySelector("#size"); // creating a variable for the 'grid size' button
const erasor = document.querySelector("#erasor") // creating a variable for the 'rainbow' button
let size = prompt("Before we get started, how big would you like your grid?"); //creating a variable for the 'change size' prompt - change this to an input box in the future
var gridBoxes;
let active = false

//creating a function that creates the grid depending on how large the size is when prompted to the user

function createGrid(size) { 
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //creating grid columns based on size, 1FR means its equal. One fraction of the available space
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; //creating grid rows based on size, 1FR means its equal

    for (let i = 0; i < size * size; i++) { //creating a for loop inside of the function, which keeps creating loops up intil it reached the established size
        let div = document.createElement("div"); //using the create.element method to create divs
        div.classList.add("gridBox"); //using JS to create add a CSS class to an element, in this case it adds a class called gridbox
        grid.appendChild(div); //appending this to the grid (appendChild (grid divs) to parent (grid container))
    }
    gridBoxes = document.querySelectorAll(".gridBox"); //this selects everything called .gridbox (which we just created above in the loop)
    gridBoxes.forEach((gridBox) => { //creating a function inside the origional function
        gridBox.addEventListener("mouseover", (e) => { //this creates an event listener when the mouse goes over -
            gridBox.classList.add("active"); //then adds the .active class to it
        });
    });
}

//creating a reset event when clicking on a button

reset.addEventListener('click', (e) => { //we have created the variable 'reset' based on the reset button and turning this into a function. So when someone clicks on the button, this function runs 
    gridBoxes.forEach((gridBox) => { 
        gridBox.classList.remove("active"); //this then removes the class
    });
});

changeSize.addEventListener("click", (e) => { //creating a function so that when someone clicks on 'change size' button, a prompt will appear
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
    size = prompt("How large would you like your grid to be? (1-100)"); // this means that when the function runs, a prompt will appear
    createGrid(size)
});

createGrid(size); //when size has been input by the user, it then runs the function


function erasorButton(){
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
        gridBox.classList.remove("active")
    })})}





//Variables
const blackPen = document.querySelector("#black-pen");
const rainbowPen = document.querySelector("#rainbow-pen");
const eraserTool = document.querySelector("#eraser-pen");
const clearAll = document.querySelector("#clear");

const grid16 = document.querySelector("#simple-size");
const grid32 = document.querySelector("#double-size");
const grid64 = document.querySelector("#triple-size");

let gridTemplate = document.querySelector("#grid");

//GRID CREATION LOGIC
const createGrid = (e) => {
    let amountGrids;
    //Setting size
    if(e.currentTarget.id=="simple-size"){
        amountGrids = 8;
    }
    else if(e.currentTarget.id=="double-size"){
        amountGrids = 16;
    }
    else{
        amountGrids = 24;
    }

    //Removing the last selection
    if(gridTemplate.firstElementChild){
        let aux = gridTemplate.firstElementChild;
        aux.remove();
    }

    let auxContainer = document.createElement("div");
    auxContainer.classList.add("auxContainer");

    //Responsive dimensions
    const widthAndHeight = 350 / amountGrids;
    
    //Creating the grid
    for(let i=0;i<amountGrids;i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.height = `${widthAndHeight}px`;

        for(let j=0;j<amountGrids;j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            row.appendChild(gridBox);
        }
        auxContainer.appendChild(row);
    }

    gridTemplate.appendChild(auxContainer);
}

//TOOLS LOGIC
const toolActive = (e) =>{
    const boxes = document.querySelectorAll('.grid-box');

    if(e.currentTarget.id=="black-pen"){
        boxes.forEach(box =>{
            box.addEventListener('mouseenter', ()=>{
                box.style.backgroundColor = 'black';
            });
        });
    }
    else if(e.currentTarget.id=="rainbow-pen"){
        boxes.forEach(box =>{
            box.addEventListener('mouseenter', ()=>{
                box.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
            });
        });
    }
    else if(e.currentTarget.id=="eraser-pen"){
        boxes.forEach(box =>{
            box.addEventListener('mouseenter', ()=>{
                box.style.backgroundColor = 'white';
            });
        });
    }
    else if(e.currentTarget.id=="clear"){
        boxes.forEach(box =>{ 
            box.style.backgroundColor = 'white';
        });
    }
}

let gridSelectors = document.querySelectorAll(".grid");
gridSelectors.forEach(gridSelector =>{
    gridSelector.addEventListener("click", createGrid);
});

let toolSelectors = document.querySelectorAll(".pen");
toolSelectors.forEach(toolSelector =>{
    toolSelector.addEventListener("click", toolActive);
});


//Paint logic

 
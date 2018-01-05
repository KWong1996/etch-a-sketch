var wrapper = document.querySelector('.wrapper');


//Initial grid size
var n = 16;

function getSize(){
    var prompt = prompt("Enter new grid size (NxN)");
}

function createGrid(n){

    wrapper.style.gridTemplateColumns = "repeat(n, 1fr)";
    wrapper.style.gridTemplateRows = "repeat(n, 1fr)"

    for(var i = 0; i < (n*n); i++){

        let block = document.createElement('div');
        block.classList.add('block');
        block.onmouseover = function(){
            block.classList.add('filled');
        }
        wrapper.appendChild(block);
        
    }
}



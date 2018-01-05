var wrapper = document.querySelector('.wrapper');

//Initial grid size
var n = 16;

function createGrid(n){

    for(var i = 0; i < n; i++){

        let block = document.createElement('div');
        block.classList.add('block');
        wrapper.appendChild(block);
        
    }
}
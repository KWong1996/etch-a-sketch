var wrapper = document.querySelector('.wrapper');
var button = document.querySelector('#newGrid');

createGrid(16);

button.onclick = function(){
    requestSize();
}

function requestSize(){
    var size = prompt("Enter the new dimensions(NxN)", "16");
    if(size == null || size == ""){

    }
    else{

        //Clears previous grid (May be memory inefficient when dealing with larger grid size)
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }

        wrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        createGrid(size);
    }
}

function createGrid(n){

    for(var i = 0; i < (n*n); i++){

        let block = document.createElement('div');
        block.classList.add('block');
        block.onmouseover = function(){
            block.classList.add('filled');
        }
        wrapper.appendChild(block);
        
    }
}



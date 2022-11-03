let addButton = document.getElementById('addButton');
let clearButton = document.getElementById('clearButton');


let toDoContainer = document.getElementById('toDoContainer');

let toDoText = document.getElementById('toDoText');

addButton.addEventListener('click', function () {
    let parag = document.createElement('p');
    parag.classList.add('parag-styling')
    toDoContainer.appendChild(parag);
    parag.innerHTML = toDoText.value;
    toDoText.value = '';

    parag.addEventListener('click',function () {
        parag.style.textDecoration = 'line-through';
    })
    

    parag.addEventListener('dblclick', function(){
        toDoContainer.removeChild(parag)
    });

    clearButton.addEventListener('click', function(){
        parag.remove();
    })

})
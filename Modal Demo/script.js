let open = document.getElementById('open');
let modalContainer = document.getElementById('modal-container');
let close = document.getElementById('close');

open.addEventListener('click',()=>{
    modalContainer.classList.add('show');
});

close.addEventListener('click',()=>{
    modalContainer.classList.remove('show');
});
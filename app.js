var modelBtn = document.querySelector('.open');
var modelBg = document.querySelector('.modal-container');
var modalClose = document.getElementById('close');

modelBtn.addEventListener('click',function(){
    modelBg.classList.add('bg-active');
})
modalClose.addEventListener('click',function(){
    modelBg.classList.remove('bg-active');
})
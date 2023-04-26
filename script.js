const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn10 = document.getElementById('btn-10');
const slider = document.querySelector('.slider');
const allImages = document.querySelector('.images');

btn1.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-0px)';
});

btn2.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-105%)';
});

btn3.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-207%)';
});

btn4.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-310%)';
});

btn5.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-412%)';
});

btn6.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-515%)';
});

btn7.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-618%)';
});

btn8.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-720%)';
});

btn9.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-823%)';
});

btn10.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-926%)';
});
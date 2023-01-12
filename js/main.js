let eltext = document.querySelector('.text');
let a = eltext.innerHTML;

eltext.addEventListener('mouseenter', () =>{
    eltext.innerHTML = '321';
    console.log(eltext);

});

eltext.addEventListener('mouseleave', () =>{
    eltext.innerHTML = a;
    console.log(eltext);
});


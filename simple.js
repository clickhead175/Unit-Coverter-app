const kilomters = document.querySelectorAll('.kilometer');
const Gallons = document.querySelectorAll('.gallons');
const Inches = document.querySelector('.inches');
const convertbtn = document.querySelector('.convertbtn')
const results = document.querySelector('.results')

let kilometerstofeet = ''
let gallonstoliters = 0

function kilometerstofeets(){
    let kilometerstofeet = kilomters.value
    kilometerstofeet =  Number((kilomters.value * 1.60934).toFixed(2));
    results.innerHTML = `${kilometerstofeet}`;
}


function gallonstoliter(){
}

function inchestocentemeters(){
}


convertbtn.addEventListener('click', ()=> kilometerstofeets())





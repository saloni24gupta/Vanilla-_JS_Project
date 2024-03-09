
let BBTN = document.getElementById("Btn")
let x = function(e) {
    alert("hELLO WORLD");
}

let y = function(e) {
    alert("hELLO WORLD1");
}


BBTN.addEventListener('click', y) 

BBTN.removeEventListener('click',x )
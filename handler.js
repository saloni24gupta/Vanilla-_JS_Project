
let BBTN = document.getElementById("Btn")
let x = function(e) {
    alert("hELLO WORLD");
}

let y = function(e) {
    alert("hELLO WORLD1");
}


BBTN.addEventListener('click', y) 

BBTN.removeEventListener('click',x  )


setInterval(async function() {
    var a = document.getElementById("bulb");
    a.classList.toggle("bulb")
}, 300)

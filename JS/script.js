import countdown from "./countdown.js";

const tempoPara2023 = new countdown("01 January 2023 00:00:00 GMT-0300");

console.log(tempoPara2023.total)
const tempos = document.querySelectorAll("[data-time]")

function Atualizar(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoPara2023.total[index]
    })
}

setInterval(Atualizar,1000);

//http-server -c-1


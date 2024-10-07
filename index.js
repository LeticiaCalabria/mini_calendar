const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
});

dayNameEl.innerText = date.toLocaleString("en", {
    weekday:"long"
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();


const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px")
});

btnEl.addEventListener("click", ()=>{
    location.reload();
})

const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const barEl = document.querySelector(".loading-bar-front");

inputEl.checked = JSON.parse(localStorage.getItem("mode")) || false;

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
        monthNameEl.style.background = "gray";
        barEl.style.background = "white";
    }else{
        bodyEl.style.background = "slateblue";
        monthNameEl.style.background = "orangered";
        barEl.style.background = "orangered";
    }
};

inputEl.addEventListener("input", ()=>{
    updateBody(); 
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};

const counterEl = document.querySelector(".counter");

let idx = 0;

function resetCounter(){
    idx = 0;
    updateNum();
}


function updateNum(){
    counterEl.innerText = idx + "%"
    barEl.style.width = idx + "%"
    idx++
    if(idx < 101){
        setTimeout(updateNum, 20);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    resetCounter();
});

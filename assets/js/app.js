let text = document.querySelector(".text");
let btncreateEl = document.querySelector(".create");
let btndelateEl = document.querySelector(".delate");
let div2 = document.querySelector(".div2");
let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");
let lion = document.querySelector(".lion");
let wolf = document.querySelector(".wolf");
let bear = document.querySelector(".bear");

btncreateEl.addEventListener("click", ()=>{
if (text.value == "dog") {
    div2.style.display = "block";
    dog.style.display = "block";
    cat.style.display = "none";
    lion.style.display = "none";
    wolf.style.display = "none";
    bear.style.display = "none";
}else if (text.value == "cat") {
    div2.style.display = "block";
    cat.style.display = "block";
    dog.style.display = "none";
    lion.style.display = "none";
    wolf.style.display = "none";
    bear.style.display = "none";
}else if (text.value == "lion") {
    div2.style.display = "block";
    lion.style.display = "block";
    wolf.style.display = "none";
    bear.style.display = "none";
    cat.style.display = "none";
    dog.style.display = "none";
}else if (text.value == "wolf") {
    div2.style.display = "block";
    wolf.style.display = "block";
    bear.style.display = "none";
    cat.style.display = "none";
    dog.style.display = "none";
    lion.style.display = "none";
}else if (text.value == "bear") {
    div2.style.display = "block";
    bear.style.display = "block";
    cat.style.display = "none";
    dog.style.display = "none";
    lion.style.display = "none";
    wolf.style.display = "none";
}
});

btndelateEl.addEventListener("click",() =>{
    div2.style.display = "none";
    
})


let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark")
    item.appendChild(icon);

    inp.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "I"){
        let par = event.target.parentElement;
        par.remove();
    }
})


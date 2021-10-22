// dichiaro variabili e costanti per selezionare gli elementi

const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".hamburger-menu");
const chiudi = document.querySelector(".fa-times");

console.log(burger);
console.log(menu);
console.log(chiudi);


// clicco su burger e si apre il menu burger aggiungendo la classe .active, questo permette anche al menu di sparire quando il viewport supera i 1000px

burger.addEventListener("click",
    
    function(){
        menu.className += " active";
    }
)


// clicco sulla croce e si chiude il menu burger togliendo la classe .active

chiudi.addEventListener("click",
    
    function(){
        menu.className = "hamburger-menu";
    }
)

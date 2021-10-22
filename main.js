// dichiaro variabili e costanti per selezionare gli elementi

const burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".hamburger-menu");
const chiudi = document.querySelector(".fa-times");

console.log(burger);
console.log(menu);
console.log(chiudi);


// clicco su burger e si apre il menu burger che è in display none

burger.addEventListener("click",
    
    function(){
        menu.className += " active";
    }
)


// clicco sulla croce e si chiude il menu burger che è in display block

chiudi.addEventListener("click",
    
    function(){
        menu.className = "hamburger-menu";
    }
)

// con il menu burger ancora aperto, se allargo la finestra si chiude comunque e torna la navigazione estesa


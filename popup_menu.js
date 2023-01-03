let cancel =document.querySelector("#cancel");
let hamburger= document.querySelector("#menu");

hamburger.addEventListener("click", function(){
    openDiv(); 
});

cancel.addEventListener("click", function(){
    closeDiv();
});

function openDiv(){
    let popup = document.querySelector('#popup')
    let toolbar = document.querySelector ('#toolbar')
    let portfolio = document.querySelector('#portfolio')
    toolbar.style.filter= blur(8);
    portfolio.style.filter= blur(8);
    popup.style.display = 'block';
   }

   function closeDiv(){
    let get = document.querySelector('#popup')
    get.style.display = 'none'
   }




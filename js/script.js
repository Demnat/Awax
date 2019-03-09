'use strict';

// =========================
// ======= TINY SLIDERS ====
//==========================
import { tns } from "./../node_modules/tiny-slider/src/tiny-slider"

(function(){
    indicators.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    const homeSlider = tns({
        container: '.carouselItemsContainer',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        lazyload: true,
        controls: false,
        navContainer: '.carouselIndicators--home',
    });
})();

// =========================
// ======= MODALS ==========
//==========================

var showModal = function(event) {
    
    event.preventDefault();
    //chowa modale
    var modalsHide = document.querySelectorAll('.modal');
    for(var i = 0; i < modalsHide.length; i++) {
        modalsHide[i].classList.remove('showM');   
    }
    //pokazuje modal-overlay
    document.querySelector('#modal-overlay').classList.add('showM');
    console.log(event.target); //wyciąga wszystkie info o danym obiekcie 
    var currentTarget = event.target;
    while (!currentTarget.classList.contains('show-modal') && currentTarget!= null) {
        currentTarget = currentTarget.parentElement;
    }
    //pokazuje modal w zależności od tego, w który but kliknięto
    document.querySelector(currentTarget.dataset.hash).classList.add('showM');

};

// stosujemy kod dla wielu linków	
var modalLinks = document.querySelectorAll('.show-modal');
for (var i = 0; i < modalLinks.length; i++) {
      modalLinks[i].addEventListener('click', showModal);
}

// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 
var hideModal = function(event) {
      event.preventDefault();
      document.querySelector('#modal-overlay').classList.remove('showM');
};

var closeButtons = document.querySelectorAll('.modal .close');
for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', hideModal);
}

// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
document.querySelector('#modal-overlay').addEventListener('click', hideModal);

//zamykanie poprzez kliknięcie w przycisk Escape na klawiaturze
document.addEventListener('keyup', function(e) {
    
    if (e.keyCode === 27) {
        document.querySelector('#modal-overlay').classList.remove('showM');
    }

});

// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
var modals = document.querySelectorAll('.modal');
for (var i = 0; i < modals.length; i++) {	  
modals[i].addEventListener('click', function(event) {
            event.stopPropagation();
      });
}




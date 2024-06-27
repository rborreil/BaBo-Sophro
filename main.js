const toggleClasses = function (selector, oldClass, newClass) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
  })
};

window.addEventListener('scroll',function(e){
  if (window.innerWidth > 1024) {
    if(window.scrollY < 34) {
      toggleClasses(".dropdown-content-accueil", "dropdown-content-large-screen-scrolled", "dropdown-content-large-screen-not-scrolled");
    } else {
      toggleClasses(".dropdown-content-accueil", "dropdown-content-large-screen-not-scrolled", "dropdown-content-large-screen-scrolled");
    }
    if(window.scrollY < 72) {
      toggleClasses(".dropdown-content-sophro", "dropdown-content-large-screen-scrolled", "dropdown-content-large-screen-not-scrolled");
    } else {
      toggleClasses(".dropdown-content-sophro", "dropdown-content-large-screen-not-scrolled", "dropdown-content-large-screen-scrolled");
    }
    if(window.scrollY < 176) {
      toggleClasses("header", "scrolled", "not-scrolled");

      toggleClasses("nav .active-scrolled", "active-scrolled", "active");

      toggleClasses("a.underline-scrolled", "underline-scrolled", "underline");

    } else {
      toggleClasses("header", "not-scrolled", "scrolled");

      toggleClasses("nav .active", "active", "active-scrolled");

      toggleClasses("a.underline", "underline", "underline-scrolled");
    }
  } else {
      toggleClasses("header", "not-scrolled", "scrolled");
  }
});


const menuBtnSmallScreen = document.querySelector('.menu-btn-small-screen');
let menuOpenSmallScreen = false;
menuBtnSmallScreen.addEventListener('click', () => {
  if(!menuOpenSmallScreen) {
    menuBtnSmallScreen.classList.add('open');
    menuOpenSmallScreen = true;
    document.querySelector(".dropdown-content-small-screen").style.height = "200px";
    // console.log('ok')
  } else {
    menuBtnSmallScreen.classList.remove('open');
    menuOpenSmallScreen = false;
    document.querySelector(".dropdown-content-small-screen").style.height = "0";
  }
});

document.body.addEventListener('click', (e) => {
  if(['menu-btn', 'menu-btn__burger'].some(i => Array.from(e.target.classList).includes(i))) {
    return;
  } else if(menuOpenSmallScreen) {
    menuBtnSmallScreen.classList.remove('open');
    menuOpenSmallScreen = false;
    document.querySelector(".dropdown-content-small-screen").style.height = "0";
  }
});


const menuBtnSmartphone = document.querySelector('.menu-btn-smartphone');
let menuOpenSmartphone = false;
menuBtnSmartphone.addEventListener('click', () => {
  if(!menuOpenSmartphone) {
    menuBtnSmartphone.classList.add('open');
    menuOpenSmartphone = true;
    document.querySelector(".dropdown-content-smartphone").style.height = "144px";

    // menuBtnSmartphone.querySelector(".menu-btn__burger::before").style.transform = "translateY(0px)";

  } else {
    menuBtnSmartphone.classList.remove('open');
    menuOpenSmartphone = false;
    document.querySelector(".dropdown-content-smartphone").style.height = "0";
  }
});

document.body.addEventListener('click', (e) => {
  if(['menu-btn', 'menu-btn__burger'].some(i => Array.from(e.target.classList).includes(i))) {
    return;
  } else if(menuOpenSmartphone) {
    menuBtnSmartphone.classList.remove('open');
    menuOpenSmartphone = false;
    document.querySelector(".dropdown-content-smartphone").style.height = "0";
  }
});

// Appear animation

// Remove the class "appear" from elements that are already visible when the page loads
// document.querySelectorAll(".appear").forEach((element) => {
//   const elementTopFromWindowBottom = window.innerHeight - element.getBoundingClientRect().top;
//   if (elementTopFromWindowBottom > -40) {
//     element.classList.remove("appear");
//   }
// });

var scrollBefore = 0;
document.addEventListener('scroll', (e) => {
  const scrolled = window.scrollY;
  if (scrolled > scrollBefore) {

    scrollBefore = scrolled;
    document.querySelectorAll(".appear").forEach((element) => {
      // console.log(element);
      const elementBottomFromWindowBottom = element.getBoundingClientRect().bottom - window.innerHeight;
      const elementTopFromWindowBottom = window.innerHeight - element.getBoundingClientRect().top;

      // console.log(elementBottomFromWindowBottom);
      if (elementTopFromWindowBottom < 160 && window.innerHeight > 500 && !element.classList.contains('slide-in')) {
        element.style.visibility = "hidden";
        // element.classList.remove("slide-in");
      } else {
        element.style.visibility = "visible";
        element.classList.add("slide-in", "fade-in");
      }
    });
  }
});

const cards = document.querySelectorAll(".flip-card");
cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    // card.querySelector(".flip-card-inner").style.transform="rotateY(180deg)";
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped");
    } else {
      cards.forEach(card => card.classList.remove("flipped"));
      card.classList.add("flipped");
    }
  });
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("feedback");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-active";
}







// Initialize and add the map
function initMap() {
  // The location of Uluru
  const cab = { lat: 43.601527451230865, lng: 6.7497221535848 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: cab,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: cab,
    map: map,
  });
}

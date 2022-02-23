//Show and hide hamburguer menu in small screens 
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const home = document.querySelector(".topnav");
const leading = document.getElementsByClassName('subani');

const firstcircle = document.querySelector(".fic");
const secondcircle = document.querySelector(".sec");

const line = document.querySelector(".line");
const arr = document.querySelector(".arro");



btn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    home.classList.toggle('mt-60');
    
});

close.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    home.classList.toggle('mt-60');
});


function set() {
    // console.log(this.scrollY);

    // if (this.scrollY > 350 && this.scrollY > 400){
        if((this.scrollY > 2200 && this.scrollY < 2500) ||(this.scrollY >3800 && this.scrollY < 4000)){
        // for (i = 0; i < leading.length; i++) {
        //     leading[i].classList.add("check");
        //   }
        // first circle
        firstcircle.classList.add("fics");
        firstcircle.classList.remove("fic");
        // second circlr
        secondcircle.classList.add("secs");
        secondcircle.classList.remove("sec");

        // arrow
        arr.classList.add("arros");
        arr.classList.remove("arro");
        // line 
        line.classList.add("lines");
        line.classList.remove("line");
    }
    else{
        // for (i = 0; i < leading.length; i++) {
        //     leading[i].classList.remove("check");
        //   }
          firstcircle.classList.remove("fics");
    firstcircle.classList.add("fic");

    secondcircle.classList.remove("secs");
    secondcircle.classList.add("sec");
          arr.classList.remove("arros");
    arr.classList.add("arro");

    line.classList.remove("lines");
    line.classList.add("line");
    }
  }

  window.addEventListener("scroll", set);
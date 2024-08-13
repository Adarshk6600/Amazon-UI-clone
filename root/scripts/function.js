const left = document.querySelector(".fa-angle-left");
const right = document.getElementById("slide_r");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let count = 0;
const slideWidth = slides[0].clientWidth;
const leftSlide = () => {
    if (count > 0) {
        count--;
        slider.style.transform = `translateX(-${count * slideWidth}px)`;
    } else {
        count = slides.length - 1;
        slider.style.transform = `translateX(-${count * slideWidth}px)`;

    }
};

const rightSlide = () => {
    if (count < slides.length - 1) {
        count++;
        slider.style.transform = `translateX(-${count * slideWidth}px)`;
    } else {
        count = 0;
        slider.style.transform = `translateX(0)`;
    }
};



left.addEventListener("click", leftSlide);
right.addEventListener("click", rightSlide);


const close = document.querySelector(".fa-x");
const selectmenu = document.querySelector(".first");
const menu = document.querySelector(".menu-bar");
const cover = document.querySelector(".cover");
selectmenu.addEventListener("click", ()=>{
   menu.classList.add("menu-bar1");
   cover.style.display = "block";
   close.classList.add("x2");
   document.querySelector("body").style.overflow = "hidden";
   
})

close.addEventListener("click",()=>{
    menu.classList.remove("menu-bar1");
    cover.style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
})

cover.addEventListener("click", ()=> {
    menu.classList.remove("menu-bar1");
    cover.style.display="none";
    document.querySelector("body").style.overflowY = "auto";
});





const bar1 = document.querySelector(".bar1");
const menu1 = document.querySelector(".menu1");
bar1.addEventListener("click",()=>{
    menu1.classList.add("menuS");
    
    document.querySelector(".back").addEventListener("click", ()=>{
        menu1.classList.remove("menuS")
    })
})

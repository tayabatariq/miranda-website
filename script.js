const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function headerloader() {


    var tl = gsap.timeline();

    tl.to("header", {
        y: "100vh",
        duration: 0,
        scale: .5,


    })
    tl.to("header", {
        y: "0vh",
        duration: 1,
        delay: 1,
    })
    tl.to("header", {
        rotate: "360deg",
        duration: .3,

    })
    tl.to("header", {
        y: "0",
        scale: 1,
        duration: 1,

    })




}
headerloader();

function navOpenanimation(){
    
var tl2 = gsap.timeline();

tl2.to("#openav", {
    top: 0,
    duration: 1,

})
tl2.from("#openav img", {
    scale: 0,
    duration: .5,



}, "nav")

tl2.from("#openav .head h3", {
    y: 60,
    opacity: 0,
    duration: .3,
    stagger: .3

}, "nav")

tl2.from("#openav .nav-link a", {
    opacity: 0,
    duration: .8,

})

tl2.from("#openav i", {
    opacity: 0,
    duration: 1,

}, "nav")
tl2.pause();

var openmenu = document.querySelector("nav i");
openmenu.addEventListener("click",()=> {
    tl2.play();
})
var closemenu = document.querySelector("#openav i");
closemenu.addEventListener("click",()=> {
    tl2.reverse();
})
}
navOpenanimation();
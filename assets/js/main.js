const img = document.getElementById("main-img2");
const h1 = document.getElementById("main-img-h1");
const pslider = document.getElementById("main-img-p");

//--------------------------------------
const datasSlider = [{
    src: "assets/img/slider1.jpg",
    h1: "The Best Fitness<br/> Studio In Town",
    p: "Contrary to popular belief,<br/> Lorem Ipsum is not simply random text"
}, {
    src: "assets/img/slider2.jpg",
    h1: "We are Certified<br/> Personal Trainer’s",
    p: "Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry"
}, {
    src: "assets/img/slider3.jpg",
    h1: "Ready To Change<br/> Your Physique",
    p: "Praesent nec metus malesuada, sollicitudin arcu nec<br/>, pharetra felis. Ut sollicitudin ut lectus."
},]
let count = 0;
setInterval(function () {
    img.src = datasSlider[count].src;
    h1.innerHTML = datasSlider[count].h1;
    pslider.innerHTML = datasSlider[count].p;
    count += 1;
    if (count === 3) {
        count = 0;
    }
    console.log(count)
}, 2600);

//------------------------------------------------------------

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

}, 2600);

//------------------------------------------------------------
$(document).ready(function () {
    $("#post1").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post1 > h2").css({color:"#efbf01"});
            $("#post1 > p").css({color:"#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post1 > h2").css({color:'white'});
            $("#post1 > p").css({color:"white"});
        },

    });
    $("#post2").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post2 > h2").css({color:"#efbf01"});
            $("#post2 > p").css({color:"#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post2 > h2").css({color:'white'});
            $("#post2 > p").css({color:"white"});
        },

    });
    $("#post3").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post3 > h2").css({color:"#efbf01"});
            $("#post3 > p").css({color:"#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post3 > h2").css({color:'white'});
            $("#post3 > p").css({color:"white"});
        },

    });
    $("#post4").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post4 > h2").css({color:"#efbf01"});
            $("#post4 > p").css({color:"#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post4 > h2").css({color:'white'});
            $("#post4 > p").css({color:"white"});
        },

    });
});
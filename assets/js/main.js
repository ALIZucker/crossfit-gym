const img = document.getElementById("main-img2");
const h1 = document.getElementById("main-img-h1");
const pslider = document.getElementById("main-img-p");
const containser = document.getElementById("showService");


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
const dataService = [
    {
        src: "assets/img/services-icon-1.png",
        titr: "Weight Lifting",
        desc: "A CrossFit gym, often referred to as a \"box,\" is a facility where individuals can participate in CrossFit workouts led by certified coaches."
    },
    {
        src: "assets/img/services-icon-2.png",
        titr: "Running",
        desc: "A CrossFit gym, often referred to as a \"box,\" is a facility where individuals can participate in CrossFit workouts led by certified coaches."
    },
    {
        src: "assets/img/services-icon-3.png",
        titr: "Yoga Meditation",
        desc: "A CrossFit gym, often referred to as a \"box,\" is a facility where individuals can participate in CrossFit workouts led by certified coaches."
    },
    {
        src: "assets/img/services-icon-4.png",
        titr: "Body Building",
        desc: "A CrossFit gym, often referred to as a \"box,\" is a facility where individuals can participate in CrossFit workouts led by certified coaches."
    },
]
for (let x of dataService) {
    containser.append(createostad(x.src, x.titr, x.desc))
}
const classarticle = document.querySelectorAll(".articleserv");
const h3service = document.querySelectorAll(".h3serv");

$(document).ready(function () {
    $("#post1").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post1 > h2").css({color: "#efbf01"});
            $("#post1 > p").css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post1 > h2").css({color: 'white'});
            $("#post1 > p").css({color: "white"});
        },

    });
    $("#post2").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post2 > h2").css({color: "#efbf01"});
            $("#post2 > p").css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post2 > h2").css({color: 'white'});
            $("#post2 > p").css({color: "white"});
        },

    });
    $("#post3").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post3 > h2").css({color: "#efbf01"});
            $("#post3 > p").css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post3 > h2").css({color: 'white'});
            $("#post3 > p").css({color: "white"});
        },

    });
    $("#post4").on({
        mouseenter: function () {
            $(this).css({transform: 'scale(1.1,1.1)'});
            $("#post4 > h2").css({color: "#efbf01"});
            $("#post4 > p").css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(this).css({transform: 'scale(1,1)'});
            console.log("asdasdasdasd444asd");
            $("#post4 > h2").css({color: 'white'});
            $("#post4 > p").css({color: "white"});
        },

    });
    $("#right-blog >a").click(function () {
        $("#hideme").show(1000).fadeIn(2000)
    });
    $(classarticle[0]).on({
        mouseenter: function () {
            $(h3service[0]).css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(h3service[0]).css({color: 'black'});

        },

    });
    $(classarticle[1]).on({
        mouseenter: function () {
            $(h3service[1]).css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(h3service[1]).css({color: 'black'});

        },

    });
    $(classarticle[2]).on({
        mouseenter: function () {
            $(h3service[2]).css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(h3service[2]).css({color: 'black'});

        },

    });
    $(classarticle[3]).on({
        mouseenter: function () {
            $(h3service[3]).css({color: "#efbf01"});
        },
        mouseleave: function () {
            $(h3service[3]).css({color: 'black'});

        },

    });

});

function createostad(strimg, strtitle, strp) {
    const articleserv = document.createElement("article");
    const imgserv = document.createElement("img");
    const h3serv = document.createElement("h3");
    const posserv = document.createElement("p");

    articleserv.setAttribute("class", "articleserv");
    imgserv.setAttribute("class", "imgserv");
    h3serv.setAttribute("class", "h3serv");
    posserv.setAttribute("class", "posserv");
    imgserv.src = strimg;
    h3serv.innerHTML = strtitle;
    posserv.innerHTML = strp;
    articleserv.append(imgserv, h3serv, posserv);
    return articleserv;
}

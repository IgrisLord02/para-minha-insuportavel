const carousel = document.getElementById("carousel");

let scroll = 0;

function move() {
    scroll += 1;

    if (scroll >= carousel.scrollWidth - carousel.clientWidth) {
        scroll = 0;
    }

    carousel.scrollTo({
        left: scroll,
        behavior: "smooth"
    });
}

setInterval(move, 20);
// BOTÃO VOLTAR TOPO

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "all";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

});

// VOLTAR SUAVE

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// SCROLL SUAVE LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

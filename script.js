// BOTÃO VOLTAR TOPO

const backToTop = document.getElementById("backToTop");

// Função pra controlar o botão
function toggleBackToTop() {

    if(window.scrollY > 300){

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "all";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

}

// Escuta o scroll
window.addEventListener("scroll", toggleBackToTop);

// Chama a função no carregamento pra garantir o estado inicial
toggleBackToTop();

// VOLTAR SUAVE
backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// SCROLL SUAVE LINKS (apenas links com # válidos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // Pula links que são só "#" ou vazios
    const href = anchor.getAttribute("href");
    
    if(href === "#" || href === "" || href === "#top") {
        
        // Se for "#top" ou só "#", scrolla pro topo
        if(href === "#top" || href === "#") {
            
            anchor.addEventListener("click", function(e){
                
                // Só previne padrão se não for link externo
                if(this.getAttribute("href").startsWith("#")) {
                    e.preventDefault();
                }
                
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                
            });
            
        }
        
        return;
        
    }
    
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// CORREÇÃO: Garante que o botão de voltar ao topo funcione mesmo depois de navegação
window.addEventListener('load', () => {
    toggleBackToTop();
});

console.log("JavaScript conectado");
const btnArriba = document.getElementById("btnArriba");

btnArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
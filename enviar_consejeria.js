document.getElementById("counselingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const emotionalState = document.getElementById("emocionalState").value;
    const stress = document.getElementById("stress").value;

    if (emotionalState === "estres" || stress === "si") {
        window.location.href = "https://selia.co/es/blog/emociones/como-manejar-el-estres-estrategias-para-la-calma-mental/";
    } else if (emotionalState === "relaciones") {
        window.location.href = "https://www.avancepsicologos.com/problemas-mas-comunes-en-relaciones-de-pareja/";
    } else if (emotionalState === "agotamiento") {
        window.location.href = "https://www.psicologia-online.com/agotamiento-emocional-sintomas-y-como-superarlo-4948.html";
    } else if (emotionalState === "ansiedad") {
        window.location.href = "https://psicologiaymente.com/vida/como-controlar-la-ansiedad";
    } else if (emotionalState === "depresion") {
        window.location.href = "https://medlineplus.gov/spanish/ency/article/002177.htm";
    } else if (emotionalState === "autoestima") {
        window.location.href = "https://www.miautoestima.com/";
    } else {
        alert("Por favor, selecciona una opción válida.");
    }
});

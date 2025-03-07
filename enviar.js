document.getElementById("supportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    

    const selectedOption = document.getElementById("emotionalSupport").value;

   
    switch (selectedOption) {
        case "estres":
            window.location.href = "https://psicologiaymente.com/clinica/consejos-reducir-estres";
            break;
        case "ansiedad":
            window.location.href = "https://emprendedor.com/20-paginas-web-para-disminuir-la-ansiedad/";
            break;
        case "depresion":
            window.location.href = "https://medlineplus.gov/spanish/ency/article/002177.htm#:~:text=Las%20siguientes%20organizaciones%20son%20buenos%20recursos%20para%20obtener,Nacional%20de%20Salud%20Mental%20--%20www.nimh.nih.gov%2Fhealth%2Fpublications%2Fespanol%2Fdepression-listing%20M%C3%A1s%20elementos";
            break;
        case "autoestima":
            window.location.href = "https://www.miautoestima.com/";
            break;
        case "consejería":
            window.location.href = "consejeria.html";
            break;
        default:
            alert("esta opción no es válida.");
            break;
    }
});

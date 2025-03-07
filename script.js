
document.getElementById('gif-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    const videoUrl = 'https://www.bing.com/videos/riverview/relatedvideo?&q=nyan+cat+&&mid=97C3250DE2CA3DD99DBF97C3250DE2CA3DD99DBF&&FORM=VRDGAR'; 
    window.location.href = videoUrl; 
});

document.getElementById('checkSupportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const supportNeeded = document.querySelector('input[name="support"]:checked').value;
    if (supportNeeded === "sí") {
        window.location.href = "opcion1.html";  
    } else {
        alert("Gracias por visitar. Si necesitas algo más, no dudes en regresar.");
    }
});

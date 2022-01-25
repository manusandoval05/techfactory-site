document.addEventListener("DOMContentLoaded", ()=>{
  fetch("http://127.0.0.1:8000/noticias/api/")
    .then(response => console.log(response.json))
});
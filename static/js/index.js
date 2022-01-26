const BASE_URL = "http://127.0.0.1:8000";

document.addEventListener("DOMContentLoaded", ()=>{
  const article_container = document.getElementById("article_container");
  fetch("http://127.0.0.1:8000/noticias/api/")
    .then(response => response.json())
    .then(json => json["articles"].forEach(article => {
      
      const card = CreateDocumentElement("div", "card");
      const img = CreateDocumentElement("img", "card-img-top", null, null, article["header_image"]);
      const card_body = CreateDocumentElement("div", "card-body");
      
      card_body.append(
        CreateDocumentElement("h5", "card-title", article["title"]), 
        CreateDocumentElement("a", "btn btn-primary", "Leer más", article["url"])
      ); 
      card.append(img, card_body);
      article_container.append(card);
    }));
});
function CreateDocumentElement(tag, classes = null, text = null, href = null, src = null){
  const element  = document.createElement(tag);
  if(classes) element.className = classes;
  if(text) element.append(document.createTextNode(text));
  if(href) element.href = `${BASE_URL}${href}`;
  if(src) element.src = `${BASE_URL}${src}`;
  return element; 
}
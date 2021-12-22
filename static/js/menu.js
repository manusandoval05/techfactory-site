function menuToggle(){
    const toggleMenu = document.querySelector(".toggle"); 
    const menu = document.querySelector(".sidebar"); 

    toggleMenu.classList.toggle("active");
    menu.classList.toggle("active");
}
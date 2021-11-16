function menuToggle(){
    const toggleMenu = document.querySelector(".toggle"); 
    const menu = document.querySelector(".glass-section"); 

    toggleMenu.classList.toggle("active");
    menu.classList.toggle("active");
}
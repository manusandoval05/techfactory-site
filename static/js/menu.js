function menuToggle(){
    const toggleMenu = document.querySelector(".toggle"); 
    const menu = document.querySelector(".glass-section"); 

    toggleMenu.classList.toggle("active");
    menu.classList.toggle("active");
    if(toggleMenu.classList.contains("active")){
        menu.style.zIndex = 6; 
        const icon = document.createElement("img"); 
        icon.src = ""; 
        icon.alt = "Close Menu icon"; 
        icon.classList.add("icon");

        document.querySelector(".icon").remove();
        toggleMenu.append(icon); 
    }
    else if(!toggleMenu.classList.contains("active")){
        section.style.zIndex = 5; 
        const icon = document.createElement("img");
        icon.src = ""; 
        icon.alt = "Open Menu Button"; 
        icon.classList.add("icon"); 

        document.querySelector(".icon").remove(); 
        toggleMenu.append(icon); 
    }
}
window.onload=()=>{
    const btnMenu= document.querySelector("#nav-barra");
    const navMenu= document.querySelector("#nav-menu");

    if(btnMenu){
        btnMenu.addEventListener('click', function(){
        navMenu.classList.toggle("nav-menu-muestra");
    })

}


}



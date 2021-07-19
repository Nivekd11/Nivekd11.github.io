window.onload=()=>{
    const btnMenu= document.querySelector("#nav-barra");
    const navMenu= document.querySelector("#nav-menu");

    if(btnMenu){
        btnMenu.addEventListener('click', function(){
        navMenu.classList.toggle("nav-menu-muestra");
    })

    }

    let ubicacionPrincipal=window.pageYOffset;
    let ubicacionCero=window.pageYOffset;
    window.onscroll=()=>{
        let desplazamiento=window.pageYOffset;
        if(desplazamiento>=ubicacionCero+10){
            document.getElementById('navegacion').style.height='10vh';
            
        }
        else if(window.innerWidth>1024){
            document.getElementById('navegacion').style.height='15vh';
            
        }
        if(ubicacionPrincipal>= desplazamiento){
            document.getElementById('navegacion').style.top='0';

        }
        
        else{
            document.getElementById('navegacion').style.top='-15vh';
        }

        ubicacionPrincipal=desplazamiento;
    }



}



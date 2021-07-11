window.addEventListener('scroll',function(){

    let bancoEfectos=['Right','Left'];

    for(let j=0;j<bancoEfectos.length;j++){
        let contenedores=document.getElementsByClassName('fade_'+bancoEfectos[j]);
        let tamanio=window.innerHeight*0.75;
        console.log(contenedores);
        for(let i=0;i<contenedores.length;i++){
            
            let alturaEfecto=contenedores[i].getBoundingClientRect().top;
            
            if(alturaEfecto<=tamanio){
                contenedores[i].classList.add('animate__animated');
                
                contenedores[i].classList.remove('ocultar');
                contenedores[i].classList.add('aparece');
                if(bancoEfectos[j]=="Right"){
                    contenedores[i].classList.add('animate__fadeInRight');
                    contenedores[i].classList.remove('animate__fadeOutRight');
                }
                else{
                    contenedores[i].classList.add('animate__fadeInLeft');
                    contenedores[i].classList.remove('animate__fadeOutLeft');
                }
                
            }
            else{

                //contenedores[i].classList.remove('animate__animated');
                contenedores[i].classList.add('ocultar');
                if(bancoEfectos[j]=="Right"){
                    contenedores[i].classList.remove('animate__fadeInRight');
                    contenedores[i].classList.add('animate__fadeOutRight');
                }
                else{
                    contenedores[i].classList.remove('animate__fadeInLeft');
                    contenedores[i].classList.add('animate__fadeOutLeft');
                }
                
                contenedores[i].classList.remove('aparece');
            }
        }
    }
    



});
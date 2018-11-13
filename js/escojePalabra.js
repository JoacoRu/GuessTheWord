    window.onload = function(){
        var letrasDesordenadas = document.querySelector('.letrasDesordenadas');
        var letrasChildren = letrasDesordenadas.children;
        var input = document.querySelector('input[name="palabra"]');
        var valorInput = input.value;
        var inputArray = Array.from(valorInput);
        var unArray = new Array;
        var palabraOrdenada = document.querySelector('.palabraOrdenada');
        var palabraOrdenadaChildren = palabraOrdenada.children;
        
        //NOTE: CALLBACK DEL EVENTO PARA PINTAR UNA LETRA

        function events(event){
            if(input.value.length >= unArray.length+1){
                unArray.push(this.textContent);
                this.style.background = 'grey';
                this.removeEventListener('click', events);
                for(let i = 0 ; i < unArray.length; i++){
                    let resultadoP = document.getElementsByClassName('resultado'+i);
                    for(value of resultadoP){
                        value.innerText = unArray[i];
                    }
                }
                validation();
            }
            
        }

        //NOTE: CADA VEZ QUE HACEMOS CLICK A UNA LETRA LA PINTA DE GRIS

        function addEvent(){        
            for(let i =0; i < letrasChildren.length; i++){
            var event =  letrasChildren[i].addEventListener('click', events);
            }
        }

        //NOTE: GENERA UN P POR CADA DE LETRA DE LA PALABRA RESULTADO
        
        function addP(){
            for(let o=0; o < inputArray.length; o++){
                var p = document.createElement('p');
                palabraOrdenada.appendChild(p);
            }
        }

        //NOTE: GENERA UN CLASS NAME EN CADA P GENERADO DE LA PALABRA DEL RESULTADO

        function addClassNameToP(){
            for(let i = 0; i < palabraOrdenadaChildren.length; i++){
                palabraOrdenadaChildren[i].classList.add("resultado"+i);
            }
        }

        var contador;

        function validation(){
            
            if(input.value.length == unArray.length){
                for(let i = 0 ; i < unArray.length; i++){
                    let resultado = document.querySelector('.resultado'+i);
                    resultado.textContent;
                }
                
                console.log(contador);
            }
        }
        addP();
        addClassNameToP();
        addEvent();
    }
    window.onload = function(){
        var letrasDesordenadas = document.querySelector('.letrasDesordenadas');
        var letrasChildren = letrasDesordenadas.children;
        var input = document.querySelector('input[name="palabra"]');
        var valorInput = input.value;
        var inputArray = Array.from(valorInput);
        var unArray = new Array;
        var palabraOrdenada = document.querySelector('.palabraOrdenada');
        var palabraOrdenadaChildren = palabraOrdenada.children;
        
        function events(event){
            unArray.push(this.textContent);
            this.style.background = 'grey';
            this.removeEventListener('click', events);
        }

        function addEvent(){        
            for(var i =0; i < letrasChildren.length; i++){
            var event =  letrasChildren[i].addEventListener('click', events);
            }
        }

        function addP(){
            for(var o=0; o < inputArray.length; o++){
                var p = document.createElement('p');
                palabraOrdenada.appendChild(p);
            }
        }

        function addClassNameToP(){
            for(var i = 0; i < palabraOrdenadaChildren.length; i++){
                palabraOrdenadaChildren[i].classList.add("resultado"+i);
            }
        }

        function contentEvent(event){
            var letra = unArray.pop();
            

        }

        function addContent(){
            for(var i = 0; i < letrasChildren.length; i++){
                var event = letrasChildren[i].addEventListener('change', contentEvent);
            }
        }

        
        addEvent();
        addP();
        addClassNameToP();

        
    }
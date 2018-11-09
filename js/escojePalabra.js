    window.onload = function(){
        var letrasDesordenadas = document.querySelector('.letrasDesordenadas');
        var letrasChildren = letrasDesordenadas.children;
        var input = document.querySelector('input[name="palabra"]');
        var valorInput = input.value;
        var inputArray = Array.from(valorInput);
        var unArray = new Array;
        function events(event){
            var posicion = inputArray.indexOf(this.textContent.toLowerCase());
            console.log(posicion);
            if(posicion != -1){
                unArray.splice(posicion, 0, this.textContent);
                this.style.background = 'grey';
                this.removeEventListener('click', events);
                console.log(unArray);
            }else{
                this.style.background = 'red';
            }
            
        }
        for(var i =0; i < letrasChildren.length; i++){
           var event =  letrasChildren[i].addEventListener('click', events);
        }

        
    }
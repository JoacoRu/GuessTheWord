    window.onload = function(){
        var letrasDesordenadas = document.querySelector('.letrasDesordenadas');
        var letrasChildren = letrasDesordenadas.children;
        var unArray = [];
        function events(event){
            unArray.push(this.textContent);
            console.log('algo');
            this.style.background = 'grey';
            this.removeEventListener('click', events);
        }
        for(var i =0; i < letrasChildren.length; i++){
           var event =  letrasChildren[i].addEventListener('click', events);
            
        }


        console.log(unArray);
    }
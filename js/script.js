const app = new Vue({
    el: '#app',
    data: {
        logoImg : 'img/logo.jpg',
        addToDo : '',
        toDo: [
            'Fare la spesa',
            'Chiamare la Ale',
            'Guardare le slide',
            'Spazzolare Enrico'
        ]
    },
    methods: {
        newToDo(){
            if(this.addToDo == ''){
               alert('Non puoi inserire un promemoria vuoto!')
            } else{
                this.toDo.push(this.addToDo);
                this.addToDo = '';
            }  
        },   
        removeToDo(index){
            this.toDo.splice(index,1);
        }
    }
})


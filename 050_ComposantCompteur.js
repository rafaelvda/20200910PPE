Vue.component('compteur',{
    data: function(){
        return {
            comptage: 0
        }

    },
    template: '<button @click="comptage++"> Vous m\'avez cliqué {{ comptage }} fois  </button> '
})

var app = new Vue({
        el: '#projetCompteur'
    }
)
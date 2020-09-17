var app= new Vue({
    el: '#totoro',    
    mounted(){
        window.axios.get('https://pokeapi.co/api/v2/pokemon/pikachu/').then(response => {
            console.log(response.data);
            console.log("Le nom du pokemon est: "+response.data.name);
            this.statistiques = response.data.stats;
            console.log(this.statistiques);
            this.statistiques.forEach(uneStatistique => {
                console.log("Le nom est: "+ uneStatistique.stat.name);
                console.log("qui a pour valeur: "+ uneStatistique.base_stat);
            });
            console.log("La stat defense vaut: "+ this.statistiques[2].base_stat)

        });
    }
});
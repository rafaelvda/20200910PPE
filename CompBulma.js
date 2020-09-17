Vue.component('Competence', {
    props: {
        titre: '',
        contenu: ''
    },
    template:`
    <article class="message">
  <div class="message-header">
    {{titre}}
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
     {{contenu}}
  </div>
</article>
    
    `
})

var app = new Vue({
    el: "#root"
})
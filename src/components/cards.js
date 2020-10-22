import info from '../store/info.js'

Vue.component('proyectos', {
       props: ['data'],
       template: `
<div class="col-md-4">
<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ data.titulo }}</div>
    
        <a target="_blank" :href="data.link">
            <img class="card-img-top" :src=data.imagen
                alt="Jojo">
        </a>
    <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">{{ data.descripcion }}</p>
        <b>{{ data.aditional }}</b>
    </div>
</div>
</div>
` });

var app = new Vue({
    el:'#app',
    data: {
         info
    },
});
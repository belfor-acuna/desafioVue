<template>
    <div class="container-fluid bg-dark">
        <div class="row align-items-md-stretch">
            <div class="col-md-6 mt-5">
                <div
                    class="h-100 p-5 bg-warning  text-dark border rounded-3">
                    <h2 class="fw-bold ">Hechizos</h2>
                    <p>Los hechizos se enseñan en las escuelas de magia y hechicería, pero no está permitido realizarlos fuera de la escuela hasta el 7º y último curso. Para realizar los que te mostramos a continuación necesitarás una varita. Ollivander, el vendedor de varitas del Callejón Diagón, asegura «la varita elige al mago», así que en este asunto poco podemos ayudarte. Donde sí podemos echarte un cable es a la hora de recordarte algunos de los hechizos más recurrentes en la saga creada por J.K Rowling.</p>
                </div>
            </div>
            <div class="col-md-6 mt-5 text-dark">
                <div
                    class="h-100 p-5 bg-danger border rounded-3 ">
                    <h2> Y RECUERDA, LA VARITA ELIGE AL MAGO</h2>
                    <img src="https://media.tenor.com/tTvBVvMFUNEAAAAC/harry-potter-sorcerer-stone.gif" alt="">
                </div>
            </div>
        </div>
        <div class="table-responsive mt-5">
            <table class="table table-striped mt-5
            table-hover	
            table-borderless
            table-primary
            align-middle">
                <thead class="table-dark">
                    <tr >
                        <th class="w-25">Nombre de Hechizo</th>
                        <th class="w-50">Descripcion (en ingles)</th>
                    </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <spell-item v-for="spell in spells" :key="spell.id" :spell="spell"/>
                        
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
            </table>
        </div>
        
    </div>
</template>
<script>
    import {listSpells} from "../services/spells.services";
    import SpellItem from "../components/SpellItem.vue"
    export default {
        name: "SpellsView",
        components:{SpellItem,},
        data(){return{
            spells:[]
            }
        },
        async mounted() {
            const result = await listSpells({limit:300,offset:0});
            this.spells = result.data;
        },
    };
</script>
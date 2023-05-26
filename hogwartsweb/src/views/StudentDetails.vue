<template>
    <div class="container bg-dark" v-if="student"> <br><br>
        <div class="row bg-dark">
            <div class="col-xl-6 col-md-6 bg-dark">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/446/546/desktop-wallpaper-harry-potter-vertical.jpg" alt="" class="w-100 ">
            </div>
            <div class="col-xl-6 col-md-6 bg-dark text-white w-50">
                <img v-if="student.image" :src="student.image" alt="" class="mt-5 rounded">
                <div v-else>
                    <h4 class="mt-3">Imagen no encontrada :c</h4>
                    <img src="https://i.pinimg.com/originals/11/a8/da/11a8daffa11e6b9479751bb7453a0650.gif" alt="" class="w-50">
                </div>
                <p class="fs-2 mt-3"> {{student.name}}</p>
                <p class="fs-2 mt-3"> {{student.house}}</p>
                <p class="fs-4 mt-3">Género: {{student.gender}}</p>
                <p class="fs-4 mt-3">Actor: {{student.actor}}</p>
                <p class="fs-4 mt-3">Fecha de nacimiento: {{student.dateOfBirth}}</p>
                <p class="fs-4 mt-3">Ascendencia: {{student.ancestry}}</p>
                <p class="fs-4 mt-3">Patronus: {{student.patronus}}</p>
                <p class="fs-4 mt-3">Especie: {{student.species}}</p>
                
            </div>
        </div>    
    </div>
</template>
<script>

import {getStudent} from "../services/hogwarts.services"

export default {
    name: "StudentDetail",
    props:  {
            id:{
                type:String,
                default:"",
               },
            },
    data (){
        return{
            student:null
        }
    },
    async mounted(){
        const studentRequest = await getStudent(this.id);
        this.student = studentRequest;
    },
};
</script>
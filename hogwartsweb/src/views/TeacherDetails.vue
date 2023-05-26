<template>
    <div class="container bg-dark" v-if="teacher"> <br><br>
        <div class="row bg-dark">
            <div class="col-xl-6 col-md-6 bg-dark">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/446/546/desktop-wallpaper-harry-potter-vertical.jpg" alt="" class="w-100 ">
            </div>
            <div class="col-xl-6 col-md-6 bg-dark text-white w-50">
                <img v-if="teacher.image" :src="teacher.image" alt="" class="mt-5 rounded">
                <div v-else>
                    <h4 class="mt-3">Imagen no encontrada :c</h4>
                    <img src="https://i.pinimg.com/originals/11/a8/da/11a8daffa11e6b9479751bb7453a0650.gif" alt="" class="w-50">
                </div>
                <p class="fs-2 mt-3"> {{teacher.name}}</p>
                <p class="fs-4 mt-3">Género: {{teacher.gender}}</p>
                <p class="fs-4 mt-3">Actor: {{teacher.actor}}</p>
                <p class="fs-4 mt-3">Fecha de nacimiento: {{teacher.dateOfBirth}}</p>
                <p class="fs-4 mt-3">Ascendencia: {{teacher.ancestry}}</p>
                <p class="fs-4 mt-3">Patronus: {{teacher.patronus}}</p>
                <p class="fs-4 mt-3">Especie: {{teacher.species}}</p>
                
            </div>
        </div>    
    </div>
</template>
<script>

import {getTeacher} from "../services/teachers.services"

export default {
    name: "TeacherDetail",
    props:  {
            id:{
                type:String,
                default:"",
               },
            },
    data (){
        return{
            teacher:null
        }
    },
    async mounted(){
        const teacherRequest = await getTeacher(this.id);
        this.teacher = teacherRequest;
    },
};
</script>
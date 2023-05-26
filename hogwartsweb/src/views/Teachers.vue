<template>
    <div class="container-fluid"><br>
        <h1 class="text-dark mt-5">Lista de profesores</h1>
        <div class="col-xl-12">
            <h1>Profesores</h1>
            <div class="row">
                 <teacher-item 
                  v-for="teacher in teachers"
                  :key="teacher.id"
                  :teacher="teacher"
                 /></div>
        </div>
       
    </div>
</template>
<script>
    import {listTeachers} from "../services/teachers.services";
    import TeacherItem from "../components/TeacherItem.vue";
    
    export default {
        name: "TeachersView",
        components: {TeacherItem},
        data(){
            return{
                teachers:[],
            };
        },
        async mounted() {
            const result = await listTeachers({limit:100,offset:0});
            this.teachers = result.data;
        },
    };
</script>
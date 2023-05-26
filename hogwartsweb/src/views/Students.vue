<template>
    <div class="container-fluid">
        <div class="col-xl-12">
            <h1>Estudiantes</h1>
            <div class="row">
                 <student-item 
                  v-for="student in students"
                  :key="student.id"
                  :student="student"
                 /></div>
        </div>
       
    </div>
</template>
<script>
    import {listStudents} from "../services/hogwarts.services";
    import StudentItem from "../components/StudentItem.vue";
    
    export default {
        name: "StudentsView",
        components: {StudentItem},
        data(){
            return{
                students:[],
            };
        },
        async mounted() {
            const result = await listStudents({limit:20,offset:0});
            this.students = result.data;
        },
    };
</script>
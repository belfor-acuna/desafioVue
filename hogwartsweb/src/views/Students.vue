<template>
    <div>
        
            <h1>Estudiantes</h1>
            <student-item 
            v-for="student in students"
            :key="student.id"
            :student="student"
            />
        
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
            const result = await listStudents({limit:3,offset:0});
            this.students = result.data;
        },
    };
</script>
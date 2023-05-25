<template>
    <div>
        <div>
            <student-item 
            v-for="student in students"
            :key="student.id"
            :student="student"
            />
        </div>
    </div>
</template>
<script>
    import {listStudents} from '../services/hogwarts-services';
    import StudentItem from '../components/StudentItem.vue'
    export default {
        name: "StudentsView",
        components: {StudentItem},
        data(){
            return{
                students:[]
            };
        },
        async mounted() {
            const students = await listStudents({limit:20,offset:20});
            this.students = students.results;
        },
    }
    ;
</script>
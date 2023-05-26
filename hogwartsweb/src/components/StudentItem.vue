<template>
    <div class="col-xl-3 col-md-6">
        <div v-if="student" @click="navigateTo({route:'student_details',student:student})" class="card w-50 btn btn-outline-primary " >
            <img v-if="student.image" :src="student.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{student.name}}</h5>
              <p class="card-text">{{student.house}}</p>
            </div>
          </div>
    </div>
</template>
<script>


export default {
    name:"StudentItem",
    props:{
        student:{
            type:Object,
            default:null
        }
    },
    methods:
    {
        navigateTo({route,student}){
        
        const studentId = student.id;
        this.$router.push({
            name:route,
            params:{
                id:studentId
            }
        });
    }
    }
    
}
</script>
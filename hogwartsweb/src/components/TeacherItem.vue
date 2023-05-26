<template>
    <div class="col-xl-3 col-md-6">
        {<div v-if="teacher" @click="navigateTo({route:'teacher_details',teacher:teacher})" class="card w-50 btn btn-outline-primary " >
            <img v-if="teacher.image" :src="teacher.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{teacher.name}}</h5>
              <p class="card-text">{{teacher.house}}</p>
            </div>
          </div>}
    </div>
</template>
<script>


export default {
    name:"TeacherItem",
    props:{
        teacher:{
            type:Object,
            default:null
        }
    },
    methods:
    {
        navigateTo({route,teacher}){
        
        const teacherId = teacher.id;
        this.$router.push({
            name:route,
            params:{
                id:teacherId
            }
        });
    }
    }
    
}
</script>
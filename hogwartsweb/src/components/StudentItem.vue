<template>
    <div>
            <div class="card">
                <div class="card-header">
                    {{student.name}}
                </div>
                <div class="card-body">
                    <h4 class="card-title"> {{student.id}}</h4>
                    <p class="card-text">{{ student.house}}</p>
                </div>
                <div class="card-footer text-muted">
                    {{student.patronus}}
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
    }

}
</script>
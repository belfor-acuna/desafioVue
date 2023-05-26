<template>
    <tr  class="table-primary" v-if="spell">
        <td class="fw-bold">{{spell.name}}</td>
        <td class="">{{spell.description}}</td>
    </tr>
        <div v-else> carganmdo</div>
</template>
<script>
export default{
    name: "SpellItem",
    props:{
        spell:{
            type:Object,
            default:null
        }
    }
}
</script>
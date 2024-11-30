<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

</script>
<template>
<div class="container">
    <div class="image"> <img :src="props.image" alt=""></div>
    <div class="info">
        <h4>{{ props.nome }}</h4>
        <p>{{ props.email }}</p>
    </div>
</div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 10%;
    padding-top: 3%;
}
.image{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
}
img{
width: 100%;
}
.info{
    margin-left: 60px;
    padding-top: 3%;
}
.info>p{
    color: rgb(163, 163, 163);
    font-size: 14px;
}
.info>h4{
    font-size: 25px;
}
</style>
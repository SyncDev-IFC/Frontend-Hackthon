<script setup>
const props = defineProps({
    materia: {
        type: String,
        required: true,
    },
    turma: {
        type: String,
        required: true,
    },
    image: {
        type: Image,
    },
    cor: {
        type: String
    }, 
    id: {
        type: Number,
        required: true,
    }
})
</script>
<template>
<router-link class="card" :style="{ borderColor: props.cor }" :to="`/turma/${props.id}`">
    <div class="informacoes">
    <p>{{ props.materia }}</p>
    <h1>{{ props.turma }}</h1>
    </div>
    <div class="img">
    <img :src="props.image" alt="">
</div>
</router-link>
</template>
<style scoped>
.card{
    display: flex;
    width: 50vw;
    border: 6px solid;
    height: 20vh;
    border-radius: 27px; 
    margin: auto;
    margin-top: 30px;
    text-decoration: none;
    color: black;
}
h1{
    font-size: 60px;
}
.informacoes{
    width: 50%;
    padding: 10px;
    padding-left: 25px;
}
.img{
    width: 50%;
    display: flex;
    justify-content: end;
}
.img>img{
    height: 19%; 
    position: absolute; 
    margin-top: -2px;

}
@media only screen and (max-width: 1200px) {
    .card {
        width: 80%;
        margin: auto;   
        height: 18vh;
    }
    h1{
        font-size: 40px;
    }
}
@media only screen and (max-width: 600px) {
    .card {
        width: 90%;
        margin: auto;
        height: 18vh;
    }
    h1{
        font-size: 40px;
    }
}
</style>

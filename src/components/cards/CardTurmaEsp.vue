<script setup>
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';


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
        type: String, 
    },
    cor: {
        type: String,
    }
})
</script>

<template>
<div class="card" :style="{ backgroundColor: props.cor }">
    <div class="informacoes">
        <div class="rightTopCorner">  <router-link to ="/" class="router"> <ArrowLeft size="30"></ArrowLeft></router-link>
        <p class="materia">{{ props.materia }}</p></div>
     
        <h1>{{ props.turma }}</h1>    </div>
    <div class="img">
        <img :src="props.image" alt="">
    </div>
</div>
</template>

<style scoped>
.rightTopCorner{
    display: flex;
    cursor: pointer;
}

.router{
    color: black;
}
.card{
    display: flex;
    width: 50vw;
    border: 6px solid;
    height: 20vh;
    border-radius: 27px; 
    margin: auto;
    margin-top: 30px;
    border-color: #00E88F;
}
h1{
    font-size: 60px;
}


.materia{
    font-size: 20px;
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

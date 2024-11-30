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
        type: String, // Corrected: Image should be a string for image URL
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
.card {
    display: flex;
    width: 50vw;
    border: 6px solid;
    height: 20vh;
    border-radius: 27px; 
    margin: auto;
    margin-top: 30px;
    text-decoration: none;
    color: black;
    overflow: hidden; /* Ensures no content overflows the card */
}

h1 {
    font-size: 60px;
}

.informacoes {
    width: 50%;
    padding: 10px;
    padding-left: 25px;
}

.img {
    width: 50%;
    display: flex;
    justify-content: end;
    overflow: hidden; /* Prevents image overflow in this container */
    position: relative; /* Ensure positioning is contained */
}

.img > img {
    height: 100%;  /* Make image fill the container while preserving aspect ratio */
    object-fit: cover; /* Ensures the image covers the container */
    width: 100%; /* Optional: If you want the image to scale responsively */
    position: relative; /* Makes sure the image respects the parent container's boundaries */
}

@media only screen and (max-width: 1200px) {
    .card {
        width: 80%;
        margin: auto;
        height: 18vh;
    }

    h1 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 600px) {
    .card {
        width: 90%;
        margin: auto;
        height: 18vh;
    }

    h1 {
        font-size: 40px;
    }
}
</style>

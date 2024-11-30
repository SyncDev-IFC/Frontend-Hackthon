<script setup>
import HeaderLogado from './HeaderLogado.vue';
</script>

<template>
    <HeaderLogado/>
    <h1 class="message">Sinto muito, não há conselho no momento!</h1>
    <div class="content">
        <img src="https://i.ibb.co/JCYBmgC/Group-164-1.png" alt="Ilustração" class="center-image">
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 60px);
    padding: 20px;
}

.message {
    font-size: 1.5rem;
    color: #333;
    margin-left: 10%;
    margin-top: 30px;
}

.center-image {
    max-width: 45%;
    height: auto;
    object-fit: contain;
}
</style>

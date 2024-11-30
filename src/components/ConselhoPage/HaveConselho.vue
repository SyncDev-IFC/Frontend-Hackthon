<script setup>
import HeaderLogado from '../ConselhoPage/HeaderLogado.vue';
import CardTurmaEsp from '@/components/cards/CardTurmaEsp.vue'
</script>

<template>
    <HeaderLogado />
    <div class="content">
        <img src="https://i.ibb.co/JCYBmgC/Group-164-1.png" alt="Ilustração" class="center-image">
    </div>

    <h1>Conselho aberto!</h1>
    <CardTurmaEsp 
    materia="Matemática" 
    turma="Turma A" 
    image="https://via.placeholder.com/150" 
    cor="#fffff" 
    />    
<button class="conselho-button">Participar do conselho</button>
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

h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 2rem;
    color: #333;
}

.conselho-button {
    width: 50vw; /* Largura igual ao CardTurmaEsp */
    height: 50px; /* Altura padrão para um botão */
    border: none;
    border-radius: 27px; /* Borda arredondada */
    background-color: #000; /* Preto */
    color: #fff; /* Texto branco */
    font-size: 1.2rem; /* Tamanho do texto */
    margin: 20px auto; /* Centraliza o botão */
    display: block;
    cursor: pointer;
    text-align: center; /* Garante o alinhamento centralizado do texto */
}

.conselho-button:hover {
    background-color: #333; /* Cor de hover */
    transition: all 0.3s ease;
}

.card-turma {
    margin-bottom: 10px; /* Espaço entre o card e o botão */
}
</style>

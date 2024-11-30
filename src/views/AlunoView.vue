<script setup>
import { alunoComponent, notasComponent, CardHistorico } from "@/components";

import { ref } from 'vue'

const props = defineProps(['id'])

const mostrar = ref(false)

const toggleMenu = () => {
  mostrar.value = !mostrar.value;
}
</script>

<template>
    <alunoComponent :email="'teste@gmail.com'" :nome="'fulano de tal'"
        :image="'https://www.lance.com.br/galerias/wp-content/uploads/2020/08/SantaCruz.jpg'" />
    <notasComponent />
    <div class="ordem">
    <h1>Histórico</h1>
    <div class="ordenar">
    <h4>Ordenar por</h4>
    
      <img src="./../assets/seta.png" alt="Menu" @click="toggleMenu" class="menu-button">
      <div v-if="mostrar" class="menu">
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
      </div>
    </div>
</div>
    <CardHistorico :data="'2024-09-10'"
        :texto="'Ana Clara iniciou o ano letivo com um excelente desempenho acadêmico e uma postura extremamente positiva em sala de aula. Demonstrou interesse imediato pelos novos conteúdos e participou ativamente das atividades propostas pelos professores. Sua curiosidade intelectual e sua capacidade de fazer perguntas pertinentes ajudaram a enriquecer as discussões em sala. Desde o começo do ano, ficou claro que Ana Clara possui uma grande dedicação aos estudos, e seu comprometimento com o aprendizado tem sido uma característica marcante...'"
        :tipo="'Observação'" />
</template>

<style scoped>
img{
    height: 7px;
    justify-content: center;
    margin-left: 5px;
}
.ordenar{
    display: flex;
    flex-direction: row;
    width: 30%;
    align-items: center;
    justify-content: end;
    position: relative; 
}
.ordem{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    gap: 60%;
    align-items: center;
    padding: 30px 7.5%;
}
.menu-button {
  cursor: pointer;
}
.menu {
  position: absolute;
  top: 30px;
  text-align: left;
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 45px -10px rgba(148,148,148,1);
  transition: opacity 0.3s ease, transform 0.3s ease; 
  z-index: 3;
}

.menu.show {
  opacity: 1;
  transform: translateY(0);
}

.menu a {
  color: black; 
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc; 
}

.menu a:last-child {
  border-bottom: none; 
}
h1{
    font-size: 25px;
}
h4{
    font-size: 15px;
}
</style>

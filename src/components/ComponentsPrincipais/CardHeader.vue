<script setup>
import { ref } from 'vue'

const mostrar = ref(false)

const toggleMenu = () => {
  mostrar.value = !mostrar.value;
}
</script>

<template>
  <header>
    <div class="nav-links">
      <h1>Ordenar por</h1>
      <img src="./../../assets/seta.png" alt="Menu" @click="toggleMenu" class="menu-button">
      <div v-show="mostrar" class="menu">
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
      </div>
      <img class="foto" src="./../../assets/user.png" alt="">
    </div>
  </header>
</template>


<style scoped>
.nav-links {
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-right: 12%;
  width: 100%;
  justify-content: flex-end;
  font-size: 13px;
  align-items: center;
  gap: 10px;
}

.foto {
  margin-left: 18px;
}

.menu-button {
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 12%;
  text-align: left;
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 45px -10px rgba(148,148,148,1);
  transition: opacity 0.3s ease, transform 0.3s ease; 
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
</style>

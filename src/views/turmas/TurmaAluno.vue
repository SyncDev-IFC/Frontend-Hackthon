<script setup>
import { CardAluno, CardTurmaEsp, CardHeader } from '@/components';
import turma from '@/services/turma';

const alunos = [
    {nome : "João Vitor Gomes", email : "j.vitor10gomes@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"},
    {nome : "Lucas Liebl", email : "lucas.liebl@gmail.com"}
]
const turmas = [
    {materia : "Matematica", turma: "3info1",  cor: '#00E88F', image:'' }
]

import { ref } from 'vue'

const mostrar = ref(false)

const toggleMenu = () => {
  mostrar.value = !mostrar.value;
}

</script>

<template>
    <CardHeader/>
    <CardTurmaEsp
v-for="turma in turmas" :key="turma"
:materia="turma.materia"
:turma="turma.turma"
:cor="turma.cor"
:image="turma.image"
/>

<div class="nav-links">
   <div class="conta">
    <h1>Alunos</h1>
   <div class="ordem">
        <h1>Ordenar por</h1>
    <img src="./../../assets/seta.png" alt="Menu" @click="toggleMenu">
      <div v-show="mostrar" class="menu">
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
        <a href="#">Alunos</a>
      </div>
   </div>
   </div>
    
    
</div>


<div class="alunos">

<CardAluno
v-for="aluno in alunos" :key="aluno"
:nome="aluno.nome"
:email="aluno.email"
/>

</div>

</template>

<style scoped> 
.alunos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
    justify-content: center;
}
.nav-links {
  display: flex;
  flex-direction: row;
  padding:10px;
    top: 40%;
  width: 100%;
  font-size: 13px;
  align-items: center;
  gap: 10px;
  margin: 20px;
  text-align: center;
  
}
.conta{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 70%;
}

.menu {
  position: absolute;
  top: 58%;
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
  background-color: white;
  z-index: 4;
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
    margin-left: 39px;
}
</style>
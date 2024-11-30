<script setup>
import {
  CardTurmaEsp,
  CardAluno,
  CardHeader,
  FooterComponent,
} from "@/components";
import { useTurmaStore } from "@/stores";
import { ref, onMounted, defineProps } from "vue";

const props = defineProps(["id"]);
const turmaStore = useTurmaStore();

onMounted(async () => {
  await turmaStore.getTurma(props.id);
});
</script>

<template>

    <CardHeader />  
    <CardTurmaEsp
      :materia="turmaStore.turma.curso?.nome"
      :turma="turmaStore.turma.nome"
      :cor="turmaStore.turma.curso?.cor"
      :image="'src/assets/chapeu.png'"
    />
    <div class="container">
    
    <div class="ordernarbox"><h1 class="text">Alunos</h1>
      <select name="Ordernar Por" id="">
        <option value="" default>Abaixo da nota</option>
        <option value=""> teste</option>
      </select>
    </div>
    <div class="alunosContainer">
      <div class="alunosContainer">
  <card-aluno
    v-for="aluno in turmaStore.turma.alunos" 
    :key="aluno.id"
    :email="aluno.email"
    :nome="aluno.nome"
    :foto="aluno.foto"
    :id="aluno.id"
  >
  </card-aluno>
</div>

    </div>  
    <div class="">
      
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
.alunosContainer {
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha */
  justify-content: center; /* Alinha os cards no centro */
  gap: 20px; /* Espaçamento entre os cards */
}

.card-aluno {
  flex: 1 1 calc(25% - 20px); /* Tamanho dos cards: 25% do container, ajustado pelo gap */
  max-width: 200px; /* Tamanho máximo do card */
  min-width: 150px; /* Tamanho mínimo do card */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombras para destacar os cards */
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
}

.container {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10%; /* Ajuste lateral para centralizar o conteúdo */
}

.ordernarbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  padding: 20px;
  font-size: 1.2em;
  font-weight: bold;
}

</style>

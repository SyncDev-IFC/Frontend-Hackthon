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
      <card-aluno
        v-for="aluno in turmaStore.turma.alunos"
        :email="aluno.email"
        :nome="aluno.nome"
        :foto="aluno.foto"
      >
      </card-aluno>
    </div>  
    <div class="">
      
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
.ordernarbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alunosContainer {
  display: flex;
  align-items: center;
  gap: 5%;
}
.container {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10%;
  padding-left: 15%;
  padding-right: 15%;
}
.text{
  padding: 20px;
}
</style>

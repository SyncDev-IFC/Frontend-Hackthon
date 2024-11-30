<script setup>
import { alunoComponent, notasComponent, ocorrenciaComponent } from "@/components";
import { useAlunoStore } from '@/stores'  
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps(['id'])
const alunoStore = useAlunoStore()
const mostrar = ref(false)
const ocorrencias = ref([]) 

onMounted(async () => {
  await alunoStore.getAluno(props.id);
  ocorrencias.value = alunoStore.state.aluno.historico.ocorrencias;  
})

const toggleMenu = () => {
  mostrar.value = !mostrar.value;
}
</script>

<template>
  <div>
    <alunoComponent 
      :email="alunoStore.state.aluno.email" 
      :nome="alunoStore.state.aluno.nome"
      :image="'https://via.placeholder.com/150'" 
    />
    <notasComponent :notas="alunoStore.state.aluno.notas" />
    <CardModal class="wrap"/>
    <v-table height="300px" fixed-header>
<thead>
<tr>
<th class="text-center">Matéria</th>
<th class="text-center">Nota</th>
</tr>
</thead>
<tbody>
<tr v-for="nota in alunoStore.state.aluno.notas" :key="nota.id">
<td class="text-center">{{ nota.disciplina.nome }}</td>
<td class="text-center">{{ nota.nota   }}</td>
</tr>
</tbody>
</v-table>

    <div class="ordem">
      <h1>Histórico</h1>
      <div class="ordenar">
        <h4>Ordenar por</h4>
        <img src="./../assets/seta.png" alt="Menu" @click="toggleMenu" class="menu-button">
        <div v-if="mostrar" class="menu">
          <a href="#">Ocorrencias</a>
          <a href="#">Observações</a>
          <a href="#">Antigos</a>
        </div>
      </div>
    </div>
    <ocorrenciaComponent :ocorrencias="ocorrencias" />  <!-- Passando as ocorrências para o componente -->
  </div>
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
.wrap{
  display: flex;
  justify-content: end;
  margin-right: 6em;
  margin-top: 30px;
  margin-bottom: 30px;
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
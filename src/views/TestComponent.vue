<script setup>
// import {CardAluno} from '@/components';
// import { CardHeader } from '@/components';
import { CardHistorico } from '@/components';
import { ref } from "vue";

const historico = ref([
  { data: "2024-11-29" ,
    texto:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    tipo : "Observação",
  },
]);

// const alunos = ref([
//   { nome: 'João Vitor Gomes', email: 'joao.vitor.gomes@gmail.com', },
//   { nome: 'Lucas Liebl', email: 'lucas.liebl@gmail.com', },
//   { nome: 'Gabriel Lima Pereira', email: 'gabriel.lima@gmail.com',},
//   { nome: 'Eduardo Monta', email: 'eduardo.monta@gmail.com', },
//   { nome: 'Heloisa Albano', email: 'heloisa.albano@gmail.com', },
//   { nome: 'Kethelyn Talia', email: 'kethelyn.talia@gmail.com', }
// ])
</script>
<template>
  <CardHistorico v-for="item in historico" :key="item" 
  :data="item.data"
  :texto="item.texto"
  :tipo="item.tipo"
  />
  <!-- <CardHeader/>
<CardAluno 
v-for="aluno in alunos" :key="aluno"
:nome="aluno.nome"
:email="aluno.email"
:foto="aluno.foto"
/> -->
</template>
<style scoped></style>

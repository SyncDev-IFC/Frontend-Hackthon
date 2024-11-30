<script setup>
import { CardTurmaEsp, CardAluno } from '@/components'


const turma = { 
  id: 0, 
  turma: '3info2',
  materia: 'Informática', 
  cor: '#00E88F', 
  image: 'src/assets/chapeu.png'
}
</script>

<template>
  <CardTurmaEsp
    :materia="turma.materia"
    :turma="turma.turma"
    :cor="turma.cor"
    :image="turma.image"
    />
    <card-aluno :nome="Kelr" :email="email"/>
</template>

<style scoped>

</style>

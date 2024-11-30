<script setup>
import { CardInformatica, CardHeader, FooterComponent } from '@/components'

const turmas = [
  { id: 0, turma: '1info1', materia: 'Informática', cor: '#00E88F', image: 'src/assets/chapeu.png' },
  { id: 1, turma: '1info3', materia: 'Informática', cor: '#FFC968', image: 'src/assets/livros.png' },
  { id: 2, turma: '1info2', materia: 'Informática', cor: '#EE7F00', image: 'src/assets/cadernos.png' },
  { id: 3, turma: '2info3', materia: 'Informática', cor: '#00E88F', image: 'src/assets/chapeu.png' },
  { id: 4, turma: '2info2', materia: 'Informática', cor: '#FFC968', image: 'src/assets/livros.png' },
  { id: 5, turma: '2info1', materia: 'Informática', cor: '#EE7F00', image: 'src/assets/cadernos.png' },
  { id: 6, turma: '3info2', materia: 'Informática', cor: '#00E88F', image: 'src/assets/chapeu.png' },
  { id: 7, turma: '3info1', materia: 'Informática', cor: '#FFC968', image: 'src/assets/livros.png' },
  { id: 8, turma: '3info3', materia: 'Informática', cor: '#EE7F00', image: 'src/assets/cadernos.png' },
]

const primeiroAno = turmas.filter(turma => turma.turma.startsWith('1info'))
const segundoAno = turmas.filter(turma => turma.turma.startsWith('2info'))
const terceiroAno = turmas.filter(turma => turma.turma.startsWith('3info'))
</script>


<template>
    <CardHeader />
      <h2>Primeiro Ano</h2>
    <div class="ano">
      <CardInformatica
        v-for="turma in primeiroAno"
        :key="turma.id"
        :materia="turma.materia"
        :turma="turma.turma"
        :cor="turma.cor"
        :image="turma.image"
      />
    </div>
    <h2>Segundo Ano</h2>
    <div class="ano">
      <CardInformatica
        v-for="turma in segundoAno"
        :key="turma.id"
        :materia="turma.materia"
        :turma="turma.turma"
        :cor="turma.cor"
        :image="turma.image"
      />
    </div>
    <h2>Terceiro Ano</h2>
    <div class="ano">
      <CardInformatica
        v-for="turma in terceiroAno"
        :key="turma.id"
        :materia="turma.materia"
        :turma="turma.turma"
        :cor="turma.cor"
        :image="turma.image"
      />
    </div>
  
    <FooterComponent />
  </template>
<style scoped>

h2 {
  margin-top: 40px;
  margin-left: 420px;
  color: #333;
}

.ano {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}
</style>






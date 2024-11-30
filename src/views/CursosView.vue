<script setup>
import { CardCurso, FooterComponent, CardHeader } from '@/components'

const cursos = [
  { id: 0, turma: 'Agropecuária', cor: '#00E88F', image: 'src/assets/vaca.png'},
  { id: 1, turma: 'Informática', cor: '#1789DE', image: 'src/assets/info.png'},
  { id: 2, turma: 'Química', cor: '#B466FA',  image: 'src/assets/quimi.png' },
]
</script>

<template>
    <CardHeader/>
    <div class="apresentacao">
        <h2>Bem Vindo, Servidor!</h2>
        <h3>É um prazer</h3>
    </div>
  <router-view />
  <CardCurso
    v-for="curso in cursos"
    :key="curso.id"
    :turma="curso.turma"
    :cor="curso.cor"
    :image="curso.image"
  />
  <FooterComponent/>
</template>

<style scoped>

.apresentacao {
    max-width: 1400px;
    margin: 0 auto;    
    padding: 0 16px;   
}


</style>





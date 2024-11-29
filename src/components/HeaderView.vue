<script setup>
// const props = defineProps({
//     foto: {
//     type: Image,
//     required: true,
//     default: '../assets/logo.png'
//   }
// })

</script>
<template>
  <header>
    <div class="nav-links">
      <h1>Ordernar por</h1>
      <img src="/home/joao/Frontend-Hackthon/src/assets/Vector 13.png" alt="">
      <img class="foto" src="/home/joao/Frontend-Hackthon/src/assets/Captura de tela 2024-11-29 083946.png" alt="">
 
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
.foto{
    margin-left: 18px;
}
</style>

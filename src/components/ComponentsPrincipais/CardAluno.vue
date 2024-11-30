<script setup>
const props = defineProps({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    default:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1200&h=900&crop=1",
  },
});
</script>

<template>
  <div class="card">
    <div class="foto">
      <img :src="props.foto" alt="" />
    </div>

    <div class="direito" >
      <div class="info">
        <h4>{{ props.nome }}</h4>
        <h5>{{ props.email }}</h5>
      </div>
        <button class="button">Ver aluno</button></div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  color: white;
  border-radius: 27px;
  width: 30%;
  padding: 20px;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px #a4a4a4 solid;
  z-index: 1;
}
img {
  height: 100%;
  margin-left: -12px;
}
.foto {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  overflow: hidden;
}
.button {
  background-color: #00e88f;
  color: black;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  align-self: flex-end;
  margin-top: 15px;
}
h4,
h5 {
  color: black;
}

h5 {
  display: flex;
  flex-wrap: wrap;
  color: #a4a4a4;
}
.info {
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.direito{
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: left;;
    
}
</style>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  ocorrencias: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div v-for="ocorrencia in ocorrencias" :key="ocorrencia.id">
    <div class="inputBox">
      <div class="text-area">{{ ocorrencia.conteudo }}</div>
      <div class="data">{{ ocorrencia.data_criacao }}</div>
      <div class="ver-mais">Ver mais</div>
    </div>
  </div>
</template>

<style scoped>
.inputBox {
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px; /* Ajuste conforme necessário */
}

.text-area {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 10px;
  flex-grow: 1; /* Faz o texto ocupar o espaço restante */
}

.data {
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 15px;
}

.ver-mais {
  width: 100%;
  color: #ffffff;
  cursor: pointer;
  background-color: black;
  text-decoration: underline;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding: 10px 0; /* Ajusta a altura do botão */
  margin-top: auto; /* Faz o botão ficar na parte inferior */
  border-radius: 0 0 10px 10px; /* Arredonda a parte inferior */
}

.ver-mais:hover {
  background-color: #333; /* Muda a cor ao passar o mouse */
}

/* Responsividade */
@media (max-width: 600px) {
  .inputBox {
    padding: 15px;
    height: auto; /* Ajusta a altura para telas pequenas */
  }

  .text-area {
    font-size: 14px;
  }

  .data {
    font-size: 10px;
  }
}
</style>

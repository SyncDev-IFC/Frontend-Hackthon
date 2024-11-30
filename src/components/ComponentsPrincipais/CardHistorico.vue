<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  data: {
    type: Date,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  }
});

const mostrarTextoCompleto = ref(false);

const textoExibido = computed(() => {
  const limite = 200;
  return mostrarTextoCompleto.value
    ? props.texto
    : props.texto.slice(0, limite) + (props.texto.length > limite ? "..." : "");
});

const alternarTexto = () => {
  mostrarTextoCompleto.value = !mostrarTextoCompleto.value;
};

function formatarTextoComQuebras(texto, limite) {
  if (!texto || texto === "") {
    console.error("Texto inválido fornecido para formatarTextoComQuebras");
    return "";
  }
  const partes = [];
  for (let i = 0; i < texto.length; i += limite) {
    partes.push(texto.slice(i, i + limite));
  }
  return partes.join("<br>");
}

const textoFormatado = computed(() =>
  formatarTextoComQuebras(textoExibido.value, 200)
);
</script>

<template>
    <div class="container">
  <div class="CardHistorico">
    <div class="conteudo">
      <p v-html="textoFormatado"></p>
    </div>

    <div class="observacoes">
      <p>{{ props.tipo }}</p>
      {{ props.data }}
    </div>

    <div class="VerMais" @click="alternarTexto">
      {{ mostrarTextoCompleto ? "Ver Menos" : "Ver Mais" }}
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
    padding: 30px 7.5%;
    z-index: 1;
}
.CardHistorico {
  border: 2px solid #c7c7c7;
  width: 100%;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.VerMais {
  display: flex;
  background-color: black;
  color: white;
  text-align: center;
  height: 7vh;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;

}

.conteudo {
  padding: 15px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
}

.observacoes {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  padding: 10px;
}
</style>
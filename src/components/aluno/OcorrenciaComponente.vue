<script setup>
</script>
<template>
  <div class="container">
    <h2>Faça aqui socorrência</h2>
    <div class="inputBox">
        <textarea name="" placeholder="Digite aqui sua observação/ocorrência..."></textarea>
        <select name="" id="">
            <option value="1">Observação</option>
            <option value="2">Ocorrência</option>
        </select>
        <input type="text" placeholder="Digite a data...">
        <button>
            Enviar
        </button>
    </div>
  </div>
</template>
<style scoped>

.inputBox{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
textarea,input,select{
    height: 100%;
}

textarea{
    border: solid 1px #A4A4A4;
    border-radius: 27px;
    height: 200px;
    padding: 18px;
}
textarea:focus {
        outline: none;
    }
textarea::placeholder {
    color: #ADADAD;
}

input, select{
    
    border: solid 1px #A4A4A4;
    border-radius: 27px;
    padding: 18px;
}
input:focus, select:focus {
        outline: none;
    }

button{
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 27px;
    padding: 18px;
    cursor: pointer;
}
</style>

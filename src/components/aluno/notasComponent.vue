<script setup>
</script>

<template>
    <div class="container">
<h4>Notas</h4>
<div class="cardNotas">
    <div class="bolinha"><p>1</p></div>
    <p class="trimestre">Trimestre</p>
    <div class="nota"> <P>9</P></div>
</div>
<div class="cardNotas">
    <div class="bolinha">2</div>
    <p class="trimestre">Trimestre</p>
    <div class="nota"> <P>9</P></div>
</div>
<div class="cardNotas">
    <div class="bolinha">3</div>
    <p class="trimestre">Trimestre</p>
    <div class="nota"> <P>9</P></div>
</div>
</div>
</template>

<style scoped>

h4{
    font-size: 25px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 7.5%;
    padding-right: 7.5%;
    margin-top: 100px;
}
.cardNotas{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    border: 1.6px solid #A4A4A4;
    border-radius: 23px;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.trimestre{
    margin-left: 30px;
    width: 85%;
}
.nota{
    display: flex;
    height: 100%;
    width: 10%;
    border-left: 1.6px solid #A4A4A4;
    justify-content: center;
    align-items: center;
}
.bolinha{
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #00E88F;
    text-align: center;
    justify-content: center;
    align-items: center;
}
</style>
<script setup>

</script>
<template>
<div class="container"> 
    <div class="inputBox">
        <textarea name="" id=""></textarea>
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <input type="date">
    </div>
</div>
</template>
<style scoped>
.container{
    /* REMOVER DIV DE CONTAINER DEPOIS*/
    display: flex;
}
.inputBox{
display: flex;
width: 80%;
justify-content: center;
align-items: center;
justify-items: center;
flex-direction: column;
margin-top: 10%;
}

input, textarea, select{
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
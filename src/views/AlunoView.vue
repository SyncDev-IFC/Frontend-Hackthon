<script setup>
import { alunoComponent , notasComponent } from "@/components";

const props = defineProps(['id'])

</script>

<template>
    <alunoComponent 
    :email="'teste@gmail.com'"
    :nome="'fulano de tal'"
    :image="'https://www.lance.com.br/galerias/wp-content/uploads/2020/08/SantaCruz.jpg'"
    />
    <notasComponent />
</template>

<style scoped>
</style>


<script setup>
import { NotConselho, HaveConselho } from '@/components';
import { useConselhoStore } from '@/stores/conselho';

// Acessando a store de conselho
const conselhoStore = useConselhoStore();
</script>

<template>
    <div>
        <HaveConselho v-if="conselhoStore.conselho && conselhoStore.conselho.status === 'aberto'" />
        <NotConselho v-else />
    </div>
</template>

<style scoped>

</style>

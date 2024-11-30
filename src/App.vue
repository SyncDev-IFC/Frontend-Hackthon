<style scoped>
.app{
    position: relative;
    min-height: 100vh;
}
</style>
<template>
    <div class="app"> 
    <RouterView></RouterView>
    <LoadingPage v-if="loadingStore.isLoading" />
</div>
</template>


<script setup>

import { useLoadingStore } from '@/stores/loading';
import { LoadingPage } from "@/components";

const loadingStore = useLoadingStore();
</script>
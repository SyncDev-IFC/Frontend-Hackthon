<template>
    <LoadingPage v-if="loadingStore.isLoading" />

</template>


<script setup>

import { useLoadingStore } from '@/stores/loading';
import { LoadingPage } from "@/components";

const loadingStore = useLoadingStore();
</script>
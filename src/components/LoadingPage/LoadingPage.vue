<script setup>
</script>

<template>
  <div class="loading-page">        
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FBFBFB;
  display: flex;
  justify-content: center;
  z-index: 9999;
  align-items: center;
}

.spinner {
  border: 8px solid #f3f3f3; /* Cor de fundo do spinner */
  border-top: 8px solid #3498db; /* Cor da parte superior que gira */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script setup>
</script>

<template>
  <div class="loading-page">        
      <div class="body">
          <img src="https://i.ibb.co/FVnJHfy/logo-freelle.png" alt="Loading Logo">
      </div>
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

.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  width: 150px;
}
</style>
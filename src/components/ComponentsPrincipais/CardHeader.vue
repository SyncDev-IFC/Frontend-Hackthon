<script setup>

</script>

<template>
  <header>
    <router-link to="/user-me">
    <div class="nav-links">
      <img class="foto" src="./../../assets/user.png" alt="">
    </div>
    </router-link>
  </header>
</template>


<style scoped>
.nav-links {
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-right: 4%;
  width: 100%;
  justify-content: flex-end;
  font-size: 13px;
  align-items: center;
  gap: 10px;
}


</style>

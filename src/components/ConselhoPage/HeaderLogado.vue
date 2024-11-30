<script setup>
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
</script>

<template>
    <div class="header">
        <ArrowLeft class="arrow-left" />

        <div class="right-content">
            <!-- <button class="btn-black-rounded">Sair do conselho</button> -->
            <img src="https://i.ibb.co/R9LNsWn/user.png" alt="User avatar" class="user-avatar">
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    gap: 70em;
}

.arrow-left {
    font-size: 24px;
    cursor: pointer;
}

.right-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.btn-black-rounded {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.btn-black-rounded:hover {
    background-color: #333;
}

.user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
}
</style>

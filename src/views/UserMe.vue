<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Para navegação
import { useCurrentUserStore } from '@/stores/user'; // Importa a store do usuário atual

// Inicializa a store
const currentUserStore = useCurrentUserStore();
const router = useRouter();

// Função para formatar a data
const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

// Expondo a função para o template
defineExpose({
  formatDate,
});

// Busca os dados do usuário ao montar o componente
onMounted(async () => {
  try {
    await currentUserStore.fetchCurrentUser();
  } catch (error) {
    console.error('Erro ao carregar os dados do usuário:', error);
  }
});

// Função para logout
const logout = () => {
  localStorage.removeItem('authToken'); // Remove o token do localStorage
  router.push('/'); // Redireciona para a página de login
};
</script>


<template>
    <div class="container" v-if="currentUserStore.isUserLoaded">
      <h1>Informações do Usuário</h1>
      <div class="user-info">
        <!-- Foto do usuário -->
        <img
          v-if="currentUserStore.state.user.foto && currentUserStore.state.user.foto.url"
          :src="currentUserStore.state.user.foto.url"
          alt="Foto do usuário"
          class="user-photo"
        />
        <img
          v-else
          src="https://via.placeholder.com/150"
          alt="Sem foto"
          class="user-photo"
        />
  
        <!-- Dados do usuário -->
        <p v-if="currentUserStore.state.user.name">Nome: <strong>{{ currentUserStore.state.user.name }}</strong></p>
        <p v-else><strong>Nome não disponível</strong></p>
  
        <p v-if="currentUserStore.state.user.email">Email: <strong>{{ currentUserStore.state.user.email }}</strong></p>
        <p v-else><strong>Email não disponível</strong></p>
  
        <p v-if="currentUserStore.state.user.id">ID: <strong>{{ currentUserStore.state.user.id }}</strong></p>
        <p v-else><strong>ID não disponível</strong></p>
  
        <p v-if="currentUserStore.state.user.groups && currentUserStore.state.user.groups.length > 0">
  Grupo: <strong>{{ currentUserStore.state.user.groups[0].name }}</strong>
</p>
<p v-else>
  <strong>Grupo não disponível</strong>
</p>
      </div>
  
      <!-- Botão de logout -->
      <button class="logout-btn" @click="logout">Logout</button>
    </div>
  
    <div class="container" v-else>
      <p>Carregando informações do usuário...</p>
    </div>
  </template>
  
  <style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

h1 {
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 30px;
  text-align: center;
}

.user-info {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 20px;
}

p {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #555;
}

strong {
  color: #333;
}

.logout-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.logout-btn:hover {
  background-color: #c9302c;
}

@media (max-width: 600px) {
  .user-info {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>

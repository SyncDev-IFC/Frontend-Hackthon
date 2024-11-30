<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const emailError = ref(false);
const errorMessage = ref('');

function validateEmail() {
  if (!email.value.includes('@ifc.edu.br')) {
    emailError.value = true;
    errorMessage.value = 'O email deve ser com o domínio @ifc.edu.br';
    return false;
  } else {
    emailError.value = false;
    errorMessage.value = '';
    return true;
}

}
async function handleForgotPassword() {
  console.log("Função handleForgotPassword foi chamada");

  // if (!validateEmail()) {
  //   return;
  // }

  try {
    const response = await authStore.ForgotPasswordUser(email.value);

    if (response) {
      router.push('/reset-senha');
    }
  } catch (error) {
    console.error('Erro ao enviar solicitação de recuperação de senha:', error);
    alert('Erro ao enviar solicitação de recuperação de senha. Tente novamente.');
  }
}
</script>

<template>
  <div class="wrapContainer">
    <div class="FormBot">
      <v-alert v-if="emailError" type="error" dismissible>
        {{ errorMessage }}
      </v-alert>

      <form class="wrapForm" @submit.prevent="handleForgotPassword">
        <div class="input-container">
          <p class="Ptext">E-mail</p>
          <input
            type="text"
            id="email"
            class="inputForm"
            v-model="email"
            required
          />
          <label for="email" class="labelForm">
            Digite aqui o seu e-mail
          </label>
        </div>

        <button type="submit" class="btnLogin mt-3">
          Enviar e-mail de recuperação
        </button>

        <p class="mt-4 Pf">
          Este site é protegido por reCAPTCHA e a Política de privacidade e os
          Termos de Serviço do Google são aplicáveis.
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.FormBot {
  width: 80%;
  justify-content: center;
  justify-items: center;
}

.input-container {
  position: relative;
  margin-top: 30px;
}

.inputForm {
  width: 100%;
  height: 50px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #8888886b;
}

.inputForm:focus + .labelForm,
.inputForm:not(:placeholder-shown):valid + .labelForm {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.labelForm {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(10%);
  color: #7070708b;
  transition: opacity 0.3s ease;
}

.btnLogin {
  width: 100%;
  height: 45px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #7e7e7e;
  color: white;
  border: none;
  border-radius: 30px;
}

.btnLogin:hover {
  background-color: #000000;
  transition: all 0.5s ease;
}

.Pf {
  font-size: 12px;
  margin-top: 30px;
  color: #888888e8;
}

.Ptext {
  text-align: left;
  color: #000000;
  margin: 5px;
}
</style>

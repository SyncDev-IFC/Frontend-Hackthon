<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const password = ref('');
const code = ref('');  // Campo para o código de recuperação
const showPassword = ref(false);
const codeError = ref(false);
const errorMessage = ref('');

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

async function handleResetPassword() {
  // Verificar se o código de recuperação foi fornecido
  if (!code.value) {
    codeError.value = true;
    errorMessage.value = 'O código de recuperação é obrigatório';
    return;
  }

  try {
    const resetData = { new_password: password.value, reset_code: code.value };
    const response = await authStore.ResetPasswordUser(resetData); 

    if (response) {
      alert('Senha redefinida com sucesso!');
      router.push('/login'); 
    }
  } catch (error) {
    console.error('Erro ao redefinir a senha:', error);
    alert('Erro ao redefinir a senha. Verifique o código ou tente novamente.');
  }
}
</script>

<template>
  <div class="wrapContainer">
    <div class="FormBot">
      <v-alert v-if="codeError" type="error" dismissible>
        {{ errorMessage }}
      </v-alert>
      <form class="wrapForm" @submit.prevent="handleResetPassword">
        <div class="input-container">
          <p class="Ptext">Código de recuperação</p>
          <input
            type="text"
            id="code"
            class="inputForm"
            v-model="code"
            required
          />
          <label for="code" class="labelForm">
            Digite o código enviado para o seu e-mail
          </label>
        </div>

        <div class="input-container">
          <p class="Ptext">Nova senha</p>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            class="inputForm"
            v-model="password"
            required
          />
          <label for="password" class="labelForm">
            Digite a nova senha
          </label>
          <div
            class="iconMostrar bi"
            :class="showPassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            @click="togglePasswordVisibility"
          ></div>
        </div>

        <button type="submit" class="btnLogin mt-3">Redefinir Senha</button>

        <p class="mt-4 Pf">
          Este site é protegido por reCAPTCHA e a Política de privacidade e os Termos de Serviço do Google são aplicáveis
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

.iconMostrar {
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin-top: -44px;
  margin-right: 12px;
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

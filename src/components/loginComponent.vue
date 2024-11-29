<script>
</script>

<template>
    <div class="wrapContainer">
        <div class="FormBot">
          <form class="wrapForm">
            <div class="input-container">
              <p class="Ptext">E-mail</p>
              <input
                type="text"
                id="username"
                class="inputForm"
                required
              />
              <label for="username" class="labelForm">
                Digite aqui o seu e-mail
              </label>
            </div>
            <div class="input-container">
              <p class="Ptext">Senha</p>
              <input
                type="password"
                id="password"
                class="inputForm"
                required
              />
              <label for="password" class="labelForm">
                Digite aqui a sua senha
              </label>
            </div>
  
            <button type="button" style="margin-top: 10px" class="btnSenha">
              <router-link to="/" class="btnSenha">Esqueceu sua senha?</router-link>
            </button>
            <button type="submit" class="btnLogin mt-3">Entrar</button>
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
  .FormBot{
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

  .btnLogin:hover{
    background-color: #000000;
    transition: all 0.5s ease;
  }
  
  .btnSenha {
    margin-top: 20px;
    border: none;
    text-decoration: underline;
    background-color: white;
    color: rgb(0, 0, 0);
    font-size: 15px;
    cursor: pointer;
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
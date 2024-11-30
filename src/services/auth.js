import axios from "axios";

class AuthService {
  async getToken(user) {
    try {
      const { data } = await axios.post("/token/", user);
      return data.access;
    } catch (error) {
      console.log(error);
    }
  }
  async getMeUser(authToken) {
    try {
        const response = await axios.get('/usuarios/me', {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o usuário logado:", error);
        throw error;  
    }
}
  async LoginUser(credentials) {
    try {
      const response = await axios.post("/login/", credentials);
      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }

  async ForgotPasswordUser(email) {
    try {
      const response = await axios.post("/forgot-password/", { email });
      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
  async ResetPasswordUser(reset_code, new_passoword) {
    try {
      const response = await axios.post(
        "/reset-password/",
        reset_code,
        new_passoword
      );
      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
}

export default AuthService;

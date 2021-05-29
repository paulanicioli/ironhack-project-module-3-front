import axios from 'axios';

class apiService {
  constructor() {
    this.api = axios.create({
      baseUrl: process.env.REACT_APP_BACKEND_URL,
    });

    this.api.interceptors.request.use((config) => {
      if (config.url.includes('/auth')) {
        return config;
      }

      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    }); //aqui conseguimos colocar qualquer informação dentro do request ANTES de ele ser feito para a API

    this.api.interceptors.response.use(
      (config) => config,
      (error) => {
        if (
          error.response.status === 401 &&
          error.response.data.type === 'Auth'
        ) {
          localStorage.removeItem('token');
          window.location.href = '/'; // forçando o user a voltar para o login
        }
        return error;
      }
    );
  }

  signupUser = async (userData) => {
    await this.api.post('/auth/signup', userData);
  };

  loginUser = async (userData) => {
    const { data } = await this.api.post('/auth/login', userData);
    return data.message;
  };
}

export default new apiService();

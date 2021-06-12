import axios from 'axios';

class apiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
    });

    this.api.interceptors.request.use((config) => {
      if (config.url.includes('/auth')) {
        return config;
      }

      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    });

    this.api.interceptors.response.use(
      (config) => config,
      (error) => {
        if (
          error.response.status === 401 &&
          error.response.data.type === 'Auth'
        ) {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          window.location.href = '/';
        }
        return error;
      }
    );
  }

  signupUser = async (userData) => {
    await this.api.post('/auth/signup', userData);
  };

  loginUser = async (userData) => {
    const response = await this.api.post('/auth/login', userData);
    return response.data.message;
  };

  logoutUser = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  };

  getBusinessCategories = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories`
    );
    return data;
  };

  getBusinessFromCategory = async (categoryId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories/${categoryId}`
    );
    return data;
  };

  getBusinessDetail = async (businessId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/businesses/${businessId}`
    );
    return data;
  };
}

export default new apiService();
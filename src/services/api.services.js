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
          error.response &&
          error.response.status === 401 &&
          error.response.data.type === 'Auth'
        ) {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          //Ou mostramos uma página de 'usuário não autorizado?'
          window.location.href = '/';
        }

        return Promise.reject(error);
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

  logoutUser = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // window.location.href = '/';
  };

  getBusinessCategories = async () => {
    const { data } = await this.api.get('/categories');
    return data;
  };

  getBusinessFromCategory = async (categoryId, coordinates, searchRadius) => {
    const { data } = await this.api.get(
      `/categories/${categoryId}` +
        `?lng=${coordinates[0]}&lat=${coordinates[1]}&searchRadius=${searchRadius}`
    );
    return data;
  };

  getBusinessDetail = async (businessId) => {
    const { data } = await this.api.get(`/businesses/${businessId}`);
    return data;
  };

  getProductDetail = async (productId) => {
    const { data } = await this.api.get(`/products/${productId}`);
    return data;
  };

  saveOrder = async (orderInfo) => {
    const { data } = await this.api.post('/orders', orderInfo);
    return data;
  };

  getOrders = async (token) => {
    const { data } = await this.api.post('/orders/my-orders', { token: token });
    return data;
  };
}

export default new apiService();

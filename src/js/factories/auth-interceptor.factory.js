angular
.module('thisApp')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request(config){
      const token = TokenService.getToken();

      console.log('API************', API);
      console.log('CONFIG.URL************', config.url);
      if (config.url.indexOf(API) === 0 && token){
        console.log('token is:', token);
        config.headers.Authorization = `Bearer ${token}`;
        // console.log('config.headers.Authorization: ', config.headers.Authorization);
      }
      return config;
    },
    response(res) {
      if (res.config.url.indexOf(API) === 0 && res.data.token){
        console.log('res.data.token: ', res.data.token);
        TokenService.setToken(res.data.token);
      }
      // console.log('res: ', res);
      return res;
    }
  };
}

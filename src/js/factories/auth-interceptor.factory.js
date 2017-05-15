angular
.module('thisApp')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request(config){
      const token = TokenService.getToken();
      // console.log('hey this is a token: ', token);

      if (config.url.indexOf(API) === 0 && token){
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

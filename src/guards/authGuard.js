import LoginService from '../servicos/LoginServico';

export function authGuard(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth) && !LoginService.tokenValido()) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
}

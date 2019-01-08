import http from './httpService';

const apiEndpoint = '/users';

export function getCurrentUser() {
  return http.get(`${apiEndpoint}/current`);
}

export default {
  getCurrentUser,
};

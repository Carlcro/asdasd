import http from './httpService';

const apiEndpoint = '/users';

const getUserApiEndpoint = userId => {
  if (userId) return `${apiEndpoint}/${userId}`;
  return apiEndpoint;
};

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export function getUser(userId) {
  const endpoint = getUserApiEndpoint(userId);
  return http.get(endpoint);
}

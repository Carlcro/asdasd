import http from '../httpService';

export function getBalances(requestUrl) {
  return http.get(requestUrl);
}

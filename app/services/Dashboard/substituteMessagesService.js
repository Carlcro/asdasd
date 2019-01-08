import http from '../httpService';

export function getMessages(requestUrl) {
  return http.get(requestUrl);
}

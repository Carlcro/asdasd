import http from '../httpService';

export function getShifts(requestUrl) {
  return http.get(requestUrl);
}

import http from '../httpService';

export function getInquiries(requestUrl) {
  return http.get(requestUrl);
}

export function saveInquiry(inq) {
  const body = { ...inq.body };
  delete body.id;
  return http.put(inq.requestURL, body);
}

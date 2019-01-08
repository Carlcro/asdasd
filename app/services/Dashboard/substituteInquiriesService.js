import http from '../httpService';

export function getInquiries(requestUrl) {
  return http.get(requestUrl);
}

export function saveInquiry(inq) {
  if (inq.action.inquiry.id) {
    const body = { ...inq.action };
    delete body.id;
    return http.put(inq.requestURL, inq.action.inquiry);
  }

  // return http.post(apiEndpoint, inq.action);
}

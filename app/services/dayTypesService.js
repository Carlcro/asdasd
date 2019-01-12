import http from './httpService';

export function getDayTypes(requestUrl) {
  return http.get(requestUrl);
}

export function saveDayType(dayType) {
  if (dayType.body.id) {
    const body = { ...dayType.body };
    delete body.id;
    return http.put(dayType.requestURL, body);
  }

  return http.post(dayType.requestURL, dayType.body);
}

export function deleteDayType(requestUrl) {
  return http.delete(requestUrl);
}

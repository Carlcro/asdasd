import http from './httpService';

export function getDayTypes(requestUrl) {
  return http.get(requestUrl);
}

export function saveDayType(dayType) {
  if (dayType.body.id) {
    const body = { ...dayType.body };
    delete body.id;
    return http.put(dayType.url, body);
  }

  return http.post(dayType.url, dayType.body);
}

export function deleteDayType(requestUrl) {
  return http.delete(requestUrl);
}

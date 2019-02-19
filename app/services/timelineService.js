import http from './httpService';

export function getTimeline(requestUrl) {
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

export function saveComment(payload) {
  return http.put(payload.requestURL, { content: payload.content });
}

export function saveLike(payload) {
  return http.put(payload.requestURL, { liked: payload.liked });
}

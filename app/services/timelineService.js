import http from './httpService';

export function getTimeline(requestUrl) {
  return http.get(requestUrl);
}

export function saveTimeline(payload) {
  return http.post(payload.requestURL, { body: payload.content });
}

export function saveComment(payload) {
  return http.put(payload.requestURL, { content: payload.content });
}

export function saveLike(payload) {
  return http.put(payload.requestURL, { liked: payload.liked });
}

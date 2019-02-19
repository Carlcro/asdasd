import { timelineData } from '../MockData/TimelineData';
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

export function saveLike(id) {
  const timelineCard = timelineData.find(x => x.id === id);
  timelineCard.liked = !timelineCard.liked;

  timelineCard.likes = timelineCard.liked
    ? timelineCard.likes + 1
    : timelineCard.likes - 1;

  const newTimeline = timelineData.filter(x => x.id !== id);

  newTimeline.push(timelineCard);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(newTimeline);
    }, 0);
  });
}

import { timelineData } from '../MockData/TimelineData';

export function getTimeline() {
  const returnData = {
    data: timelineData,
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(returnData);
    }, 0);
  });
}

export function saveComment(comment, id) {
  const timelineCard = timelineData.find(x => x.id === id);

  const newComment = {
    name: 'Carl Cronsioe',
    avatar: 'https://api.adorable.io/avatars/186/Carl2.png',
    body: comment,
  };

  timelineCard.comments.push(newComment);

  const newTimeline = timelineData.filter(x => x.id !== id);

  newTimeline.push(timelineCard);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(newTimeline);
    }, 0);
  });
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

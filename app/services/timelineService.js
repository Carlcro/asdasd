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

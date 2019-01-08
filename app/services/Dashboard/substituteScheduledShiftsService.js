import http from '../httpService';

const apiEndpoint = '/dashboard/substitute/scheduledShifts';

function scheduledShiftseUrl(dateFrom, dateTo) {
  return `${apiEndpoint}/${dateFrom}/${dateTo}`;
}

export function getScheduledShifts(dateFrom, dateTo) {
  return http.get(scheduledShiftseUrl(dateFrom, dateTo));
}

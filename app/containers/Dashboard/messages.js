/*
 * Dashboard Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.Dashboard';

export default defineMessages({
  workTime: {
    id: `${scope}.workTime`,
    defaultMessage: 'Work time',
  },
  vacationTime: {
    id: `${scope}.vacationTime`,
    defaultMessage: 'Vacation time',
  },
  leaveTime: {
    id: `${scope}.leaveTime`,
    defaultMessage: 'leave time',
  },
  alertTime: {
    id: `${scope}.alertTime`,
    defaultMessage: 'Stand by time',
  },
  watchTime: {
    id: `${scope}.watchTime`,
    defaultMessage: 'On call time',
  },
  illnessTime: {
    id: `${scope}.illnessTime`,
    defaultMessage: 'Illnes time',
  },
  totalShiftDetailsTime: {
    id: `${scope}.totalShiftDetailsTime`,
    defaultMessage: 'Booked hours',
  },
  totalScheduledShiftTime: {
    id: `${scope}.totalScheduledShiftTime`,
    defaultMessage: 'Scheduled shifts',
  },
  totalAvailabilityTime: {
    id: `${scope}.totalAvailabilityTime`,
    defaultMessage: 'Availability time',
  },
  totalAvailabilityTimeRemainingAfter: {
    id: `${scope}.totalAvailabilityTimeRemainingAfter`,
    defaultMessage:
      'Availability time remaining after bookings and scheduled shifts',
  },
  myBalances: {
    id: `${scope}.myBalances`,
    defaultMessage: 'My balances',
  },
  messages: {
    id: `${scope}.messages`,
    defaultMessage: 'Messages',
  },
  inquiries: {
    id: `${scope}.inquiries`,
    defaultMessage: 'Inquiries',
  },
  mySchedule: {
    id: `${scope}.mySchedule`,
    defaultMessage: 'My schedule',
  },
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  fromName: {
    id: `${scope}.fromName`,
    defaultMessage: 'From',
  },
  fromDate: {
    id: `${scope}.fromDate`,
    defaultMessage: 'Sent',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Message',
  },
  messageType: {
    id: `${scope}.messageType`,
    defaultMessage: 'Message type',
  },
  shift: {
    id: `${scope}.shift`,
    defaultMessage: 'Shift',
  },
  workplace: {
    id: `${scope}.workplace`,
    defaultMessage: 'Workplace',
  },
  break: {
    id: `${scope}.break`,
    defaultMessage: 'Break',
  },
  yes: {
    id: `${scope}.yes`,
    defaultMessage: 'Yes',
  },
  no: {
    id: `${scope}.no`,
    defaultMessage: 'No',
  },
  previousWeek: {
    id: `${scope}.previousWeek`,
    defaultMessage: 'Previous week',
  },
  nextWeek: {
    id: `${scope}.nextWeek`,
    defaultMessage: 'Next Week',
  },
});

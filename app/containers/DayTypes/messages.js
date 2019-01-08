/*
 * DayType Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.DayTypes';

export default defineMessages({
  dayTypes: {
    id: `${scope}.dayTypes`,
    defaultMessage: 'Day types',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  shortName: {
    id: `${scope}.shortName`,
    defaultMessage: 'Short name',
  },
  sign: {
    id: `${scope}.sign`,
    defaultMessage: 'Sign',
  },
  color: {
    id: `${scope}.color`,
    defaultMessage: 'Color',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  close: {
    id: `${scope}.close`,
    defaultMessage: 'Close',
  },
  editDayType: {
    id: `${scope}.editDayType`,
    defaultMessage: 'Edit day type',
  },
  addDayType: {
    id: `${scope}.addDayType`,
    defaultMessage: 'Add day type',
  },
});

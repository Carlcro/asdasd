/*
 * Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.Common';

export default defineMessages({
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
  edit: {
    id: `${scope}.edit`,
    defaultMessage: 'Edit',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add',
  },
});

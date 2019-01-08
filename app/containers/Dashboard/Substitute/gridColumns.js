import React from 'react';
import { format } from 'utils/dateFormat';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const gridColumns = {
  messages: [
    {
      title: <FormattedMessage {...messages.fromName} />,
      field: 'fromName',
      width: '120rem',
    },
    {
      title: <FormattedMessage {...messages.fromDate} />,
      field: 'fromDate',
      width: '180rem',
      template: message => <td>{format(message.fromDate, 'd MMM hh:mm')}</td>,
    },
    {
      title: <FormattedMessage {...messages.message} />,
      field: 'subject',
      template: message => (
        <td>
          <span className="text-nowrap">{message.subject} </span>
        </td>
      ),
    },
    {
      title: <FormattedMessage {...messages.messageType} />,
      field: 'messageType',
      width: '150rem',
      filterable: true,
    },

    { title: 'Id', field: 'id', width: '5rem' },
  ],
};

export { gridColumns };

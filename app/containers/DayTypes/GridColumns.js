import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const gridColumns = [
  { title: <FormattedMessage {...messages.name} />, field: 'name' },
  { title: <FormattedMessage {...messages.shortName} />, field: 'shortName' },
  {
    title: <FormattedMessage {...messages.sign} />,
    field: 'sign',
    width: '100',
  },
  {
    title: <FormattedMessage {...messages.color} />,
    field: 'color',
    width: '100',
    template(item) {
      return (
        <td style={{ background: item.color, border: '1px solid #999' }} />
      );
    },
  },
];

export default gridColumns;

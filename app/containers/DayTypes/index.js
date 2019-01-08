import React from 'react';
import { FormattedMessage } from 'react-intl';
import DayTypesGrid from './DayTypesGrid';
import messages from './messages';

const DayTypes = () => (
  <div>
    <h1>
      <FormattedMessage {...messages.dayTypes} />
    </h1>
    <DayTypesGrid />
  </div>
);

export default DayTypes;

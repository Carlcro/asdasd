import React from 'react';
import { FormattedMessage } from 'react-intl';
import MessagesGrid from './MessagesGrid';
import InquiryGrid from './InquiryGrid';
import Balances from './Balances';
import MySchedule from './MySchedule';
import messages from '../messages';
import '../../../styles/Common.css';

const SubstituteDashboardView = () => (
  <div>
    <div>
      <h3>
        <FormattedMessage {...messages.myBalances} />
      </h3>
      <Balances />
      <h2>
        <FormattedMessage {...messages.messages} />
      </h2>
      <MessagesGrid />
      <h2>
        <FormattedMessage {...messages.inquiries} />
      </h2>
      <InquiryGrid />
      <h2>
        <FormattedMessage {...messages.mySchedule} />
      </h2>
      <MySchedule />
    </div>
  </div>
);

export default SubstituteDashboardView;

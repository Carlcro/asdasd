import React from 'react';
import { FormattedMessage } from 'react-intl';
import SubstituteDashboardView from './Substitute/SubstituteDashboardView';
import messages from './messages';

const Dashboard = () => (
  <div className="container-timecare">
    <h1>
      <FormattedMessage {...messages.dashboard} />
    </h1>
    <SubstituteDashboardView />
  </div>
);

export default Dashboard;

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.get('dashboard', initialState);

const makeSelectBalances = () =>
  createSelector(selectDashboard, dashboardState =>
    dashboardState.get('balances'),
  );

const makeSelectMessages = () =>
  createSelector(selectDashboard, dashboardState =>
    dashboardState.get('messages'),
  );

const makeSelectInquiries = () =>
  createSelector(selectDashboard, dashboardState =>
    dashboardState.get('inquiries'),
  );

const makeSelectSchedule = () =>
  createSelector(selectDashboard, dashboardState =>
    dashboardState.get('schedule'),
  );

export {
  selectDashboard,
  makeSelectBalances,
  makeSelectMessages,
  makeSelectInquiries,
  makeSelectSchedule,
};

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.get('dayTypes', initialState);

const makeSelectDayTypes = () =>
  createSelector(selectDashboard, dashboardState =>
    dashboardState.get('dayTypes'),
  );

export { selectDashboard, makeSelectDayTypes };

/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_BALANCES = 'Substitute/LOAD_BALANCES';
export const LOAD_BALANCES_SUCCESS = 'Substitute/LOAD_BALANCES_SUCCESS';
export const LOAD_BALANCES_ERROR = 'Substitute/LOAD_BALANCES_ERROR';

export const LOAD_MESSAGES = 'Substitute/LOAD_MESSAGES';
export const LOAD_MESSAGES_SUCCESS = 'Substitute/LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = 'Substitute/LOAD_MESSAGES_ERROR';

export const LOAD_INQUIRIES = 'Substitute/LOAD_INQUIRIES';
export const LOAD_INQUIRIES_SUCCESS = 'Substitute/LOAD_INQUIRIES_SUCCESS';
export const LOAD_INQUIRIES_ERROR = 'Substitute/LOAD_INQUIRIES_ERROR';

export const SAVE_INQUIRY = 'Substitute/SAVE_INQUIRY';

export const LOAD_SCHEDULE = 'Substitute/LOAD_INQUIRIES';
export const LOAD_SCHEDULE_SUCCESS = 'Substitute/LOAD_SCHEDULE_SUCCESS';
export const LOAD_SCHEDULE_ERROR = 'Substitute/LOAD_SCHEDULE_ERROR';

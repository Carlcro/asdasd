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

export const LOAD_DAYTYPES = 'DAYTYPES/LOAD_DAYTYPES';
export const LOAD_DAYTYPES_SUCCESS = 'DAYTYPES/LOAD_DAYTYPES_SUCCESS';
export const LOAD_DAYTYPES_ERROR = 'DAYTYPES/LOAD_DAYTYPES_ERROR';

export const DELETE_DAYTYPE = 'DAYTYPES/DELETE_DAYTYPE';
export const DELETE_DAYTYPE_SUCCESS = 'DAYTYPES/DELETE_DAYTYPE_SUCCESS';
export const DELETE_DAYTYPE_ERROR = 'DAYTYPES/DELETE_DAYTYPE_ERROR';

export const SAVE_DAYTYPE = 'DAYTYPES/SAVE_DAYTYPE';
export const SAVE_DAYTYPE_SUCCESS = 'DAYTYPES/SAVE_DAYTYPE_SUCCESS';
export const SAVE_DAYTYPE_ERROR = 'DAYTYPES/SAVE_DAYTYPE_ERROR';

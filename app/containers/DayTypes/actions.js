import {
  LOAD_DAYTYPES,
  LOAD_DAYTYPES_SUCCESS,
  LOAD_DAYTYPES_ERROR,
  DELETE_DAYTYPE,
  DELETE_DAYTYPE_SUCCESS,
  DELETE_DAYTYPE_ERROR,
  SAVE_DAYTYPE,
  SAVE_DAYTYPE_SUCCESS,
  SAVE_DAYTYPE_ERROR,
} from './constants';

export function loadDayTypes() {
  return {
    type: LOAD_DAYTYPES,
  };
}

export function dayTypesLoaded(dayTypes) {
  return {
    type: LOAD_DAYTYPES_SUCCESS,
    dayTypes,
  };
}

export function dayTypesLoadingError(error) {
  return {
    type: LOAD_DAYTYPES_ERROR,
    error,
  };
}

export function deleteDayType(id) {
  return {
    type: DELETE_DAYTYPE,
    id,
  };
}

export function dayTypeDeleted() {
  return {
    type: DELETE_DAYTYPE_SUCCESS,
  };
}

export function dayTypeDeleteError(error) {
  return {
    type: DELETE_DAYTYPE_ERROR,
    error,
  };
}

export function saveDayType(dayType) {
  return {
    type: SAVE_DAYTYPE,
    dayType,
  };
}

export function dayTypeSaved(dayType) {
  return {
    type: SAVE_DAYTYPE_SUCCESS,
    dayType,
  };
}

export function dayTypeSaveError(error) {
  return {
    type: SAVE_DAYTYPE_ERROR,
    error,
  };
}

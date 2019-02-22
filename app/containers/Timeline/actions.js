import {
  LOAD_TIMELINE,
  LOAD_TIMELINE_SUCCESS,
  LOAD_TIMELINE_ERROR,
  SAVE_COMMENT,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
  SAVE_LIKE,
  SAVE_LIKE_SUCCESS,
  SAVE_LIKE_ERROR,
  SAVE_TIMELINE,
  SAVE_TIMELINE_SUCCESS,
  SAVE_TIMELINE_ERROR,
} from './constants';

export function loadTimeline() {
  return {
    type: LOAD_TIMELINE,
  };
}
export function timelineLoaded(timeline) {
  return {
    type: LOAD_TIMELINE_SUCCESS,
    timeline,
  };
}
export function timelineLoadingError(error) {
  return {
    type: LOAD_TIMELINE_ERROR,
    error,
  };
}

export function saveComment(content, id) {
  return {
    type: SAVE_COMMENT,
    content,
    id,
  };
}
export function commentSaved(timeline) {
  return {
    type: SAVE_COMMENT_SUCCESS,
    timeline,
  };
}
export function commentSavedError(error) {
  return {
    type: SAVE_COMMENT_ERROR,
    error,
  };
}

export function saveLike(id, liked) {
  return {
    type: SAVE_LIKE,
    id,
    liked,
  };
}
export function likeSaved(timeline) {
  return {
    type: SAVE_LIKE_SUCCESS,
    timeline,
  };
}
export function likeSavedError(error) {
  return {
    type: SAVE_LIKE_ERROR,
    error,
  };
}

export function saveTimeline(content) {
  return {
    type: SAVE_TIMELINE,
    content,
  };
}
export function timelineSaved(timeline) {
  return {
    type: SAVE_TIMELINE_SUCCESS,
    timeline,
  };
}
export function timelineSavedError(error) {
  return {
    type: SAVE_TIMELINE_ERROR,
    error,
  };
}

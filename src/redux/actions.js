import {
  DELETE_ENCOUNTER,
  DELETE_ITEM,
  RESET,
  SAVE_ENCOUNTER,
  SAVE_ITEM,
} from "@/redux/actionTypes";

export const reduxReset = () => ({
  type: RESET,
});

export const reduxSaveItem = (item) => ({
  type: SAVE_ITEM,
  payload: {
    item,
  },
});

export const reduxDeleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: {
    item,
  },
});

export const reduxSaveEncounter = (encounter) => ({
  type: SAVE_ENCOUNTER,
  payload: {
    encounter,
  },
});

export const reduxDeleteEncounter = (encounter) => ({
  type: DELETE_ENCOUNTER,
  payload: {
    encounter,
  },
});

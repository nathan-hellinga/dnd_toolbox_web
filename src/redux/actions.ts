import {
  DELETE_ENCOUNTER,
  DELETE_ITEM,
  RESET,
  SAVE_ENCOUNTER,
  SAVE_ITEM,
  SAVE_NPC,
  DELETE_NPC
} from "@/redux/actionTypes";
import { NPC } from "./reducers/main.types";

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

export const reduxSaveNPC = (npc: NPC) => ({
  type: SAVE_NPC,
  payload: {
    npc
  }
})

export const reduxDeleteNPC = (npcId: string) => ({
  type: DELETE_NPC,
  payload: {
    npcId
  }
})

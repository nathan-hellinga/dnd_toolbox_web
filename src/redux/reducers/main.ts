import {
  DELETE_ENCOUNTER,
  DELETE_ITEM,
  SAVE_ENCOUNTER,
  SAVE_ITEM,
  SAVE_NPC,
  DELETE_NPC
} from "@/redux/actionTypes";
import { MainState, NPC } from "./main.types";
import semver from "semver"


/**
 *  -- VERSIONS --
 *  1.0.0
 *   - Added npcs field
 */

const currentVersion = '1.0.0'

const initialState: MainState = {
  __version: currentVersion,
  items: {
    saved: [],
  },
  encounters: {
    saved: [],
  },
  npcs: {
    saved: []
  }
};

export default function main(state = initialState, action) {
  switch (action.type) {
    case SAVE_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          saved: [...state.items.saved, action.payload.item],
        },
      };
    case DELETE_ITEM:
      const delete_item_index = state.items.saved.findIndex(
        (x) =>
          x.name === action.payload.item?.name &&
          x.cost === action.payload.item?.cost &&
          x.power === action.payload.item?.power
      );
      if (delete_item_index === -1) return state; // if we dont find an item to delete dont delete anything
      // remove 1 element
      const delete_items_saved_copy = [...state.items.saved];
      delete_items_saved_copy.splice(delete_item_index, 1);
      return {
        ...state,
        items: {
          ...state.items,
          saved: [...delete_items_saved_copy],
        },
      };
    case SAVE_ENCOUNTER:
      return {
        ...state,
        encounters: {
          ...state.encounters,
          saved: [...state.encounters.saved, action.payload.encounter],
        },
      };
    case DELETE_ENCOUNTER:
      let delete_encounter_index = state.encounters.saved.findIndex(
        (x) =>
          x.name === action.payload.encounter?.name &&
          x.num_enemies === action.payload.encounter?.num_enemies &&
          x.xp === action.payload.encounter?.xp
      );
      if (delete_encounter_index === -1) return state;
      // remove 1 element
      const delete_encounter_saved_copy = [...state.encounters.saved];
      delete_encounter_saved_copy.splice(delete_encounter_index, 1);
      return {
        ...state,
        encounters: {
          ...state.encounters,
          saved: [...delete_encounter_saved_copy],
        },
      };
    case SAVE_NPC:
      return {
        ...state,
        npcs: {
          ...state.npcs,
          saved: [...state.npcs.saved, action.payload.npc],
        },
      };
    case DELETE_NPC:
      let delete_npc_index = state.npcs.saved.findIndex(
        (x) =>
          x.id === action.payload.npcId
      );
      if (delete_npc_index === -1) return state;
      // remove 1 element
      const delete_npc_saved_copy = [...state.npcs.saved];
      delete_npc_saved_copy.splice(delete_npc_index, 1);
      return {
        ...state,
        npcs: {
          ...state.npcs,
          saved: [...delete_npc_saved_copy],
        },
      };
    case 'persist/REHYDRATE':
      const persistVersion = action?.payload?.main?.__version || '0.0.0'
      const migrationState: MainState = {...state, ...action?.payload?.main}

      if(semver.satisfies(persistVersion, '<1.0.0')){
        // run the 1.0.0 migration
        migrationState.__version = '1.0.0'
        migrationState.npcs = {
          saved: []
        }
      }
      return migrationState
    default:
      return state;
  }
}

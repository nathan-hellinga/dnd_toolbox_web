import {
  getBaseType,
  getItemSlot,
  getRandomBaseType,
} from "@/redux/static_data/items/baseTypes";
import {
  findFlavorById,
  getRandomFlavor,
} from "@/redux/static_data/items/flavor";
import { getRandomMods } from "@/redux/static_data/items/mods";
import getRandomRarity from "@/redux/static_data/items/getRandomRarity";
import { itemModsKeywordSubstitution } from "@/redux/static_data/keyword_randomizer";

export function generateRandomItem({
  baseType = null,
  slotType = null,
  rarity = null,
} = {}) {
  /**
   * Use provided Item types in this priority:
   *     BaseType
   *     SlotType
   *     None
   * If none are provided we randomly pick a slot and select a random base from that slot.
   * This gives every slot an even chance of being selected no matter how many base types there are.
   */
  if (baseType) {
    baseType = getBaseType(baseType);
    slotType = getItemSlot(baseType?.name);
  } else if (slotType) {
    slotType = getItemSlot(slotType);
    baseType = getRandomBaseType(slotType.slot);
  } else {
    baseType = getRandomBaseType();
    slotType = getItemSlot(baseType?.name);
  }

  // Use the provided rarity, else randomly choose rarity based on weights
  if (!rarity) {
    rarity = getRandomRarity();
  }

  // ITEM MODS
  const mods = getRandomMods(slotType.slot, baseType.name, rarity);

  // Flavor TEXT
  let flavor = "";
  for (let i = 0; i < mods.length; i++) {
    if (mods[i]?.flavor) {
      flavor = findFlavorById(mods[i].flavor).text;
      break;
    }
  }
  // if we didnt find a flavor, get a random one
  if (flavor === "") {
    try {
      flavor = getRandomFlavor(slotType.slot, baseType.name).text;
    } catch (e) {
      // if there are no available flavor texts, set it to an empty string
      flavor = "";
    }
  }

  // ITEM NAME
  let itemName = baseType.name;
  let pre = false;
  let suf = false;
  for (let i = 0; i < mods.length; i++) {
    if (pre === false && mods[i].prefix) {
      itemName = `${mods[i].prefix} ${itemName}`;
      pre = true;
      continue; // This should prevent the prefix and suffix coming from the same mod every time
    }
    if (suf === false && mods[i].suffix) {
      itemName = `${itemName} ${mods[i].suffix}`;
      suf = true;
      continue; // This should prevent the prefix and suffix coming from the same mod every time
    }
    if (pre && suf) break;
  }

  // ITEM COST
  // common - base value, uncommon - 500, rare - 5 000, very rare - 50 000, legendary - 500 000
  let base_price = parseInt(baseType.cost);
  // most base prices are pretty low, try to center price around 50
  let item_cost = 45 + Math.random() * base_price;
  // multiply by 9-11 for each mod
  for (let i = 0; i < rarity; i++) {
    item_cost = Math.ceil(item_cost * (Math.random() * 2 + 9));
  }
  // for whatever reason if item cost is < 0
  if (item_cost < 0) item_cost = 500 * rarity;

  return {
    name: itemName,
    power: rarity,
    cost: item_cost,
    stats: baseType.stats,
    flavor: flavor,
    typeId: baseType,
    mods: itemModsKeywordSubstitution(
      mods.reduce((r, a) => {
        r.push(a.mod);
        return r;
      }, [])
    ),
  };
}

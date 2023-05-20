import {
  getRandomFromArray,
  getRandomInt,
} from "@/redux/static_data/pickRandom";

export const damage_types = [
  "Acid",
  // "Bludgeoning",
  "Cold",
  "Fire",
  "Force",
  "Necrotic",
  "Lightning",
  // "Piercing",
  "Poison",
  "Psychic",
  "Radiant",
  // "Slashing",
  "Thunder",
];

export const enemy_types = [
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead",
];

export const attributes = [
  "Strength",
  "Constitution",
  "Dexterity",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const attributes_short = ["STR", "CON", "DEX", "INT", "WIS", "CHA"];

const keywords = {
  keyword_damage_type: () => getRandomFromArray(damage_types),
  keyword_attribute_check: (value = undefined) =>
    `DC ${value || getRandomInt(2, 4) * 5} ${getRandomFromArray(attributes)}`,
  keyword_attribute_short_check: (value = undefined) =>
    `DC ${value || getRandomInt(2, 4) * 5} ${getRandomFromArray(
      attributes_short
    )}`,
  keyword_attribute: () => getRandomFromArray(attributes),
  keyword_attribute_short: () => getRandomFromArray(attributes_short),
  keyword_int: (max = 5, step = 1) => getRandomInt(1, max / step) * step,
  keyword_range: (min = 1, max = 5, step = 1) =>
    getRandomInt(Math.max(1, min) / step, max / step) * step,
  keyword_enemy_type: () => getRandomFromArray(enemy_types),
};

const re = /{[^ {}]+}/g;

export function itemModsKeywordSubstitution(mods) {
  mods = mods.map((mod) => {
    let matches = mod.match(re);
    if (matches === null) return mod;
    for (let i = 0; i < matches.length; i++) {
      let kw = matches[i].slice(1, -1).split(":");
      let replacement = null;
      // try to find a replacement
      try {
        replacement = keywords[kw[0]](...kw.slice(1));
      } catch (e) {}
      if (replacement !== null) {
        mod = mod.replace(matches[i], `{${replacement}}`);
      }
    }
    return mod;
  });
  return mods;
}

export const ITEM_BASE_TYPES = [
  {
    slot: "helmet",
    types: [
      {
        name: "Plate Helmet",
        cost: 500,
        stats: "Disadvantage: Stealth",
      },
      {
        name: "Leather Helmet",
        cost: 5,
        stats: null,
      },
      {
        name: "Silk Hood",
        cost: 2,
        stats: null,
      },
    ],
  },
  {
    slot: "body",
    types: [
      {
        name: "Plate Armour",
        cost: 1000,
        stats: "AC: 18 - Disadvantage: Stealth",
      },
      {
        name: "Mail Armour",
        cost: 28,
        stats: "AC: 16 - Disadvantage: Stealth",
      },
      {
        name: "Leather Armour",
        cost: 8,
        stats: "AC: 11 + Dex",
      },
      {
        name: "Silk Robes",
        cost: 20,
        stats: "AC: 9 + Dex",
      },
    ],
  },
  {
    slot: "gloves",
    types: [
      {
        name: "Plate Gloves",
        cost: 250,
        stats: null,
      },
      {
        name: "Mail Gloves",
        cost: 150,
        stats: null,
      },
      {
        name: "Leather Gloves",
        cost: 4,
        stats: null,
      },
    ],
  },
  {
    slot: "boots",
    types: [
      {
        name: "Leather Boots",
        cost: 25,
        stats: null,
      },
      {
        name: "Plate Boots",
        cost: 250,
        stats: null,
      },
      {
        name: "Cloth Boots",
        cost: 1,
        stats: null,
      },
    ],
  },
  {
    slot: "weapon",
    types: [
      {
        name: "Longsword",
        cost: 15,
        stats: "1d8 Slashing - Versatile (1d10)",
      },
      {
        name: "Greatsword",
        cost: 50,
        stats: "2d6 Slashing - Heavy, two-handed",
      },
      {
        name: "Mace",
        cost: 5,
        stats: "1d6 Bludgeoning",
      },
      // {
      //   name: "Axe",
      //   cost: 5,
      //   stats: "1d6 Slashing - light, thrown (20/60)",
      // },
      {
        name: "Shortbow",
        cost: 25,
        stats: "1d6 Piercing - ammunition (80/320), two-handed",
      },
      {
        name: "Crossbow",
        cost: 25,
        stats: "1d8 Piercing - ammunition (80/320), loading, two-handed",
      },
      {
        name: "Club",
        cost: 1,
        stats: "1d4 Bludgeoning - light",
      },
      {
        name: "Dagger",
        cost: 2,
        stats: "1d4 Piercing - finesse, light, thrown (20/60)",
      },
      {
        name: "Greatclub",
        cost: 2,
        stats: "1d8 Bludgeoning - two-handed",
      },
      {
        name: "Handaxe",
        cost: 1,
        stats: "1d6 Slashing - light, thrown (20/60)",
      },
      {
        name: "Javelin",
        cost: 1,
        stats: "1d6 Piercing - thrown (30/120)",
      },
      {
        name: "Light Hammer",
        cost: 2,
        stats: "1d4 Bludgeoning - light, thrown (20/60)",
      },
      {
        name: "Quarterstaff",
        cost: 1,
        stats: "1d6 Bludgeoning - versatile (1d8)",
      },
      {
        name: "Sickle",
        cost: 1,
        stats: "1d4 Slashing - light",
      },
      {
        name: "Spear",
        cost: 1,
        stats: "1d6 Piercing - thrown (20/60), versatile (1d8)",
      },
      {
        name: "Battleaxe",
        cost: 10,
        stats: "1d8 Slashing - versatile (1d10)",
      },
      {
        name: "Flail",
        cost: 10,
        stats: "1d8 Bludgeoning",
      },
      {
        name: "Greataxe",
        cost: 30,
        stats: "1d12 Slashing - heavy, two-handed",
      },
      // {
      //   name: "Scimitar",
      //   cost: 25,
      //   stats: "1d6 Slashing - finesse, light",
      // },
      {
        name: "Warhammer",
        cost: 15,
        stats: "1d8 Bludgeoning - versatile (1d10)",
      },
      // {
      //   name: "Longbow",
      //   cost: 50,
      //   stats: "1d8 Piercing - ammunition (150/600), heavy, two-handed",
      // },
    ],
  },
  {
    slot: "jewelry",
    types: [
      {
        name: "Belt",
        cost: 2,
        stats: null,
      },
      {
        name: "Ring",
        cost: 420,
        stats: null,
      },
      {
        name: "Amulet",
        cost: 550,
        stats: null,
      },
    ],
  },
  {
    slot: "misc",
    types: [
      {
        name: "Flask",
        cost: 20,
        stats: null,
      },
      {
        name: "Shield",
        cost: 10,
        stats: "AC: +2",
      },
      {
        name: "Arrows (20)",
        cost: 5,
        stats: "Ammunition",
      },
    ],
  },
];

export const getBaseType = (name) => {
  for (let slot of ITEM_BASE_TYPES) {
    for (let type of slot.types) {
      if (type.name === name) {
        return { ...type, slot: slot.slot };
      }
    }
  }
  // return null if no matching name is found
  return null;
};

export const getRandomBaseType = (slotName) => {
  let slots = ITEM_BASE_TYPES;

  // Filter slots based on slotName if provided
  if (slotName) {
    slots = slots.filter((slot) => slot.slot === slotName);
  }

  if (slots.length === 0) {
    // No slots match the provided slotName
    return null;
  }

  // Pick a random slot from the array
  const randomSlot = getItemSlot();

  // Pick a random type from the chosen slot's types array
  const randomType =
    randomSlot.types[Math.floor(Math.random() * randomSlot.types.length)];

  return randomType;
};

export const getItemSlot = (name) => {
  if (name) {
    // name provided, find the matching slot
    for (let slot of ITEM_BASE_TYPES) {
      if (slot.types.some((type) => type.name === name)) {
        return slot;
      }
    }
    // return null if no matching name is found
    return null;
  } else {
    // name not provided, return a random slot weighted by number of baseTypes
    let weightedSlots = [];
    for (let slot of ITEM_BASE_TYPES) {
      for (let i = 0; i < slot.types.length; i++) {
        weightedSlots.push(slot);
      }
    }
    return weightedSlots[Math.floor(Math.random() * weightedSlots.length)];
  }
};

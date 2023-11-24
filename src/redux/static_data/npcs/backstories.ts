import { ICorePersonaMetricsObject } from "./types";

export interface IBackstory {
  name: string,
  metricsAdjustment: ICorePersonaMetricsObject
}

export const NPC_BACKSTORIES: IBackstory[] = [
  {
    "name": "Noble Heir",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 20, "Sociability": 15, "Empathy": -5, "Resilience": 5 }
  },
  {
    "name": "Orphaned at a Young Age",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": -5, "Sociability": -10, "Empathy": 5, "Resilience": 20 }
  },
  {
    "name": "Former Street Urchin",
    "metricsAdjustment": { "Adaptability": 20, "Discipline": -10, "Sociability": 10, "Empathy": -5, "Resilience": 15 }
  },
  {
    "name": "Trained Under a Master",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 25, "Sociability": -5, "Empathy": 0, "Resilience": 10 }
  },
  {
    "name": "Survived a Catastrophe",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 0, "Sociability": -5, "Empathy": -10, "Resilience": 25 }
  },
  {
    "name": "Former Soldier",
    "metricsAdjustment": { "Adaptability": 0, "Discipline": 20, "Sociability": 5, "Empathy": -15, "Resilience": 20 }
  },
  {
    "name": "Wanderer of the Wilds",
    "metricsAdjustment": { "Adaptability": 25, "Discipline": -5, "Sociability": -10, "Empathy": 10, "Resilience": 10 }
  },
  {
    "name": "Scholar of Ancient Lore",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 15, "Sociability": -15, "Empathy": 5, "Resilience": -5 }
  },
  {
    "name": "Grew Up in Poverty",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": -15, "Sociability": 10, "Empathy": 20, "Resilience": 10 }
  },
  {
    "name": "Child of Merchants",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 5, "Sociability": 20, "Empathy": 0, "Resilience": -5 }
  },
  {
    "name": "Cult Survivor",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 0, "Sociability": -20, "Empathy": 15, "Resilience": 25 }
  },
  {
    "name": "Raised by Monks",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 25, "Sociability": -10, "Empathy": 20, "Resilience": 0 }
  },
  {
    "name": "Escaped Slavery",
    "metricsAdjustment": { "Adaptability": 20, "Discipline": -10, "Sociability": -5, "Empathy": 10, "Resilience": 15 }
  },
  {
    "name": "Apprenticed to a Wizard",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 15, "Sociability": -10, "Empathy": 0, "Resilience": 10 }
  },
  {
    "name": "Former Pirate",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": -15, "Sociability": 20, "Empathy": -10, "Resilience": 10 }
  },
  {
    "name": "Disgraced Noble",
    "metricsAdjustment": { "Adaptability": -15, "Discipline": 10, "Sociability": 5, "Empathy": -20, "Resilience": 0 }
  },
  {
    "name": "Hermit in the Wilderness",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 5, "Sociability": -25, "Empathy": 0, "Resilience": 20 }
  },
  {
    "name": "Traveling Bard",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": -10, "Sociability": 25, "Empathy": 15, "Resilience": -5 }
  },
  {
    "name": "Hunter of Beasts",
    "metricsAdjustment": { "Adaptability": 20, "Discipline": 5, "Sociability": -5, "Empathy": -10, "Resilience": 20 }
  },
  {
    "name": "Secret Society Member",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 20, "Sociability": 0, "Empathy": -5, "Resilience": 10 }
  },
  {
    "name": "Local Townsperson",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 10, "Sociability": 10, "Empathy": 10, "Resilience": 5 }
  },
  {
    "name": "Merchant's Assistant",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 5, "Sociability": 15, "Empathy": 0, "Resilience": 0 }
  },
  {
    "name": "Farmhand",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 15, "Sociability": 0, "Empathy": 5, "Resilience": 15 }
  },
  {
    "name": "Village Healer",
    "metricsAdjustment": { "Adaptability": 0, "Discipline": 10, "Sociability": 5, "Empathy": 20, "Resilience": 5 }
  },
  {
    "name": "Squire to a Knight",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 20, "Sociability": -5, "Empathy": -5, "Resilience": 15 }
  },
  {
    "name": "Local Craftsman",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 20, "Sociability": 5, "Empathy": 0, "Resilience": 5 }
  },
  {
    "name": "Wandering Minstrel",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": -10, "Sociability": 20, "Empathy": 5, "Resilience": 0 }
  },
  {
    "name": "Apprentice Mage",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 15, "Sociability": -10, "Empathy": 0, "Resilience": 10 }
  },
  {
    "name": "Temple Acolyte",
    "metricsAdjustment": { "Adaptability": 0, "Discipline": 15, "Sociability": 0, "Empathy": 15, "Resilience": 10 }
  },
  {
    "name": "City Guard",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 15, "Sociability": 10, "Empathy": -5, "Resilience": 15 }
  },
  {
    "name": "Last Survivor of a Lost Civilization",
    "metricsAdjustment": { "Adaptability": 25, "Discipline": -5, "Sociability": -15, "Empathy": 5, "Resilience": 20 }
  },
  {
    "name": "Former Cult Leader",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 20, "Sociability": 15, "Empathy": -20, "Resilience": 5 }
  },
  {
    "name": "Astral Traveler",
    "metricsAdjustment": { "Adaptability": 30, "Discipline": -5, "Sociability": 0, "Empathy": 0, "Resilience": 5 }
  },
  {
    "name": "Royal Spy",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": 10, "Sociability": 20, "Empathy": -10, "Resilience": 5 }
  },
  {
    "name": "Dragon's Servant",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": 15, "Sociability": -10, "Empathy": -5, "Resilience": 25 }
  },
  {
    "name": "Time Rift Wanderer",
    "metricsAdjustment": { "Adaptability": 30, "Discipline": -10, "Sociability": -5, "Empathy": 0, "Resilience": 15 }
  },
  {
    "name": "Prophesied Hero",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 5, "Sociability": 10, "Empathy": 10, "Resilience": 25 }
  },
  {
    "name": "Reincarnated Sage",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 25, "Sociability": -5, "Empathy": 20, "Resilience": 5 }
  },
  {
    "name": "Fallen Angel",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 5, "Sociability": 0, "Empathy": 30, "Resilience": -5 }
  },
  {
    "name": "Demonic Pact Survivor",
    "metricsAdjustment": { "Adaptability": 5, "Discipline": -15, "Sociability": -10, "Empathy": -20, "Resilience": 30 }
  },
  {
    "name": "Ancient Guardian Awakened",
    "metricsAdjustment": { "Adaptability": -15, "Discipline": 30, "Sociability": -20, "Empathy": 0, "Resilience": 25 }
  },
  {
    "name": "Interdimensional Fugitive",
    "metricsAdjustment": { "Adaptability": 20, "Discipline": -10, "Sociability": -5, "Empathy": 5, "Resilience": 20 }
  },
  {
    "name": "Cursed by a Witch",
    "metricsAdjustment": { "Adaptability": -5, "Discipline": 0, "Sociability": -15, "Empathy": 15, "Resilience": 25 }
  },
  {
    "name": "Ghost Whisperer",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": -5, "Sociability": 5, "Empathy": 25, "Resilience": -5 }
  },
  {
    "name": "Former Sea Captain",
    "metricsAdjustment": { "Adaptability": 15, "Discipline": 10, "Sociability": 20, "Empathy": -5, "Resilience": 0 }
  },
  {
    "name": "Defected Assassin",
    "metricsAdjustment": { "Adaptability": 10, "Discipline": 20, "Sociability": -20, "Empathy": -10, "Resilience": 20 }
  },
  {
    "name": "Forgotten Monarch",
    "metricsAdjustment": { "Adaptability": -20, "Discipline": 15, "Sociability": 10, "Empathy": -5, "Resilience": 10 }
  },
  {
    "name": "Risen Undead",
    "metricsAdjustment": { "Adaptability": -10, "Discipline": 5, "Sociability": -30, "Empathy": -15, "Resilience": 40 }
  },
  {
    "name": "Shadow Realm Escapee",
    "metricsAdjustment": { "Adaptability": 25, "Discipline": -10, "Sociability": -5, "Empathy": 0, "Resilience": 20 }
  },
  {
    "name": "Ancient Library Keeper",
    "metricsAdjustment": { "Adaptability": -15, "Discipline": 25, "Sociability": -10, "Empathy": 10, "Resilience": 0 }
  }
];

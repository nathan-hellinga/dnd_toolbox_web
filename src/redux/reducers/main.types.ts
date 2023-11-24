import { RaceName } from "../static_data/npcs/race";
import { CorePersonaMetricScores } from "../static_data/npcs/types";

export interface MainState {
  __version: string,
  items: {
    saved: Item[]
  },
  encounters: {
    saved: IEncounter[]
  },
  npcs: {
    saved: NPC[]
  }
}


export interface Item {
  name: string;
  power: number;
  cost: number;
  stats: string;
  flavor: string;
  typeId: {
    name: string;
    cost: number;
    stats: string;
  };
  mods: string[];
}

interface Speed {
  walk?: number;
  fly?: number;
  swim?: number;
}

interface Monster {
  slug: string;
  name: string;
  size: string;
  type: string;
  subtype: string | null;
  group: string | null;
  alignment: string;
  armor_class: number;
  armor_desc: string | null;
  hit_points: number;
  hit_dice: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
  perception: number | null;
  skills: Record<string, number>;
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  cr: number;
  actions: Action[];
  reactions: Reaction[];
  legendary_desc: string;
  legendary_actions: string;
  special_abilities: SpecialAbility[];
  spell_list: any[]; // Define this more precisely if possible
  page_no: number;
  img_main: string | null;
  document__slug: string;
  document__title: string;
  document__license_url: string;
  document__url: string;
}

interface Action {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage_dice?: string;
}

interface Reaction {
  name: string;
  desc: string;
}

interface SpecialAbility {
  name: string;
  desc: string;
}


interface Enemy {
  count: number;
  details: Monster;
}

export interface IEncounter {
  name: string;
  type: string;
  xp: number;
  num_enemies: number;
  encounter_challenge_rating: number;
  enemies: Enemy[];
}

type nameDesc = {
  name: string,
  description: string
}

export type AlignmentCode = "lg" | "ng" | "cg" | "ln" | "nn" | "cn" | "le" | "ne" | "ce"

export type NPC = {
  id: string,
  name: string,
  age: number,
  alignment: AlignmentCode,
  weightKg: number,
  heightCm: number,
  isDead: boolean,
  race: RaceName,
  gender: 'male' | 'female',
  backstory: nameDesc,
  occupation: nameDesc,
  corePersonaMetrics: CorePersonaMetricScores,
  traits: nameDesc[],
  goals: nameDesc[],
  flaws: nameDesc[],
  family: {
    parents: NPC[],
    siblings: NPC[],
    children: NPC[]
  }
}


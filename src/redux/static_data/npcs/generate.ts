import { NPC } from "../../reducers/main.types";
import { NPC_RACES, RaceName } from "./race";
import { getNormallyDistributedRandomInt, getRandomFromArray, getRandomInt, shuffleArray } from "../pickRandom";
import { NPC_BACKSTORIES } from "./backstories";
import { CorePersonaMetricScores } from "./types";
import { ITrait, NPC_FLAWS, NPC_GOALS, NPC_TRAITS } from "./traits";
import { nanoid } from "nanoid";
import { generateNPCName } from "../names/generateNPCName";
import { NPC_OCCUPATIONS } from "./occupation";


type generateNPCOptions = {
  race?: RaceName
}

export const generateNPC = (options?: generateNPCOptions): NPC => {

  const baseRace = options?.race ? NPC_RACES.find(x => x.raceName === options.race) : getRandomFromArray(NPC_RACES);
  const backstory = getRandomFromArray(NPC_BACKSTORIES);

  const corePersonaStats: CorePersonaMetricScores = Object.keys(backstory.metricsAdjustment).reduce((a, r) => ({
    ...a,
    [r]: a[r] + backstory.metricsAdjustment[r]
  }), { ...baseRace.basePersonaMetrics });


  const traits = getTraitWeightedByPersonaMetrics(NPC_TRAITS, corePersonaStats, 2);
  const flaws = getTraitWeightedByPersonaMetrics(NPC_FLAWS, corePersonaStats, 1);
  const goals = getTraitWeightedByPersonaMetrics(NPC_GOALS, corePersonaStats, 1);
  const occupation = getTraitWeightedByPersonaMetrics(NPC_OCCUPATIONS, corePersonaStats, 1);


  const gender: "male" | "female" = getRandomFromArray(["male", "female"]);


  const npc: NPC = {
    id: nanoid(20),
    name: generateNPCName(gender).full,
    race: baseRace.raceName,
    age: getRandomInt(1, baseRace.physicalAttributes.lifespan * 1.1),
    alignment: getRandomFromArray(["lg", "ng", "cg", "ln", "nn", "cn", "le", "ne", "ce"]),
    weightKg: getNormallyDistributedRandomInt(baseRace.physicalAttributes.averageWeightKg[gender] * 0.8, baseRace.physicalAttributes.averageWeightKg[gender] * 1.2),
    heightCm: getNormallyDistributedRandomInt(baseRace.physicalAttributes.averageHeightCm[gender] * 0.8, baseRace.physicalAttributes.averageHeightCm[gender] * 1.2),
    corePersonaMetrics: corePersonaStats,
    gender,
    isDead: false,
    backstory: {
      name: backstory.name,
      description: ""
    },
    occupation: {
      name: occupation[0].name,
      description: occupation[0].description
    },
    traits: traits.map(x => ({ name: x.name, description: x.description })),
    flaws: flaws.map(x => ({ name: x.name, description: x.description })),
    goals: goals.map(x => ({ name: x.name, description: x.description })),
    family: {
      children: [],
      parents: [],
      siblings: []
    }
  };

  return npc;
};


const getTraitWeightedByPersonaMetrics = (traits: ITrait[], cpm: CorePersonaMetricScores, count: number): ITrait[] => {
  const weightMulti = 2;

  const shuffled = shuffleArray(traits);
  const selected: ITrait[] = [];

  for (let i = 0; i < shuffled.length; i++) {
    for (const key of Object.keys(cpm)) {
      let baseChance = 100;
      if (shuffled[i].metricsAssociation[key] === "positive") {
        baseChance *= cpm[key] / 100;
      } else if (shuffled[i].metricsAssociation[key] === "negative") {
        baseChance *= 100 / cpm[key]; // not exact but i dont care
      }

      const increase = Math.max(baseChance - 100, 0) * weightMulti;
      if (increase >= 0) {
        baseChance += increase;
      }


      baseChance -= 80;
      const rnd = Math.random() * 200;
      // console.log(`my chance: ${baseChance}, rnd: ${rnd} --- ${key} - ${shuffled[i].metricsAssociation[key]}`);
      if (rnd < baseChance) {
        // console.log(`we did enter the if`);
        selected.push(shuffled[i]);
        break;
      }

    }
    if (selected.length >= count) break;
  }

  return selected;
};
import { CorePersonaMetricScores } from "./types";

export type RaceName = "Human" | "Elf" | "Dwarf" | "Halfling" | "Orc" | "Gnome" | "Tiefling";


interface PhysicalAttributes {
  averageHeightCm: {
    male: number;
    female: number;
  };
  averageWeightKg: {
    male: number;
    female: number;
  };
  lifespan: number;
  ageOfMaturity: number;
}

interface CulturalAttributes {
  commonLanguages: string[];
  majorReligionsOrBeliefs: string[];
  commonValues: string[];
}

interface RaceStatBlock {
  raceName: RaceName;
  basePersonaMetrics: CorePersonaMetricScores;
  physicalAttributes: PhysicalAttributes;
  culturalAttributes: CulturalAttributes;
}

export const NPC_RACES: RaceStatBlock[] = [
  {
    "raceName": "Human",
    "basePersonaMetrics": {
      "Adaptability": 100,
      "Discipline": 100,
      "Sociability": 100,
      "Empathy": 100,
      "Resilience": 100
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 175,
        "female": 162
      },
      "averageWeightKg": {
        "male": 78,
        "female": 68
      },
      "lifespan": 80,
      "ageOfMaturity": 18
    },
    "culturalAttributes": {
      "commonLanguages": ["Common"],
      "majorReligionsOrBeliefs": ["Various"],
      "commonValues": ["Diversity", "Adaptability"]
    }
  },
  {
    "raceName": "Elf",
    "basePersonaMetrics": {
      "Adaptability": 110,
      "Discipline": 120,
      "Sociability": 90,
      "Empathy": 105,
      "Resilience": 95
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 180,
        "female": 170
      },
      "averageWeightKg": {
        "male": 70,
        "female": 60
      },
      "lifespan": 750,
      "ageOfMaturity": 100
    },
    "culturalAttributes": {
      "commonLanguages": ["Elvish", "Common"],
      "majorReligionsOrBeliefs": ["Nature Worship", "Ancestor Veneration"],
      "commonValues": ["Tradition", "Nature"]
    }
  },
  {
    "raceName": "Dwarf",
    "basePersonaMetrics": {
      "Adaptability": 85,
      "Discipline": 120,
      "Sociability": 80,
      "Empathy": 90,
      "Resilience": 130
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 130,
        "female": 124
      },
      "averageWeightKg": {
        "male": 75,
        "female": 68
      },
      "lifespan": 350,
      "ageOfMaturity": 50
    },
    "culturalAttributes": {
      "commonLanguages": ["Dwarvish", "Common"],
      "majorReligionsOrBeliefs": ["Ancestor Worship", "Craftsmanship"],
      "commonValues": ["Honor", "Tradition"]
    }
  },
  {
    "raceName": "Halfling",
    "basePersonaMetrics": {
      "Adaptability": 110,
      "Discipline": 90,
      "Sociability": 120,
      "Empathy": 115,
      "Resilience": 90
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 90,
        "female": 88
      },
      "averageWeightKg": {
        "male": 35,
        "female": 30
      },
      "lifespan": 150,
      "ageOfMaturity": 20
    },
    "culturalAttributes": {
      "commonLanguages": ["Halfling", "Common"],
      "majorReligionsOrBeliefs": ["Community", "Simple Pleasures"],
      "commonValues": ["Comfort", "Community"]
    }
  },
  {
    "raceName": "Orc",
    "basePersonaMetrics": {
      "Adaptability": 90,
      "Discipline": 80,
      "Sociability": 70,
      "Empathy": 70,
      "Resilience": 120
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 210,
        "female": 205
      },
      "averageWeightKg": {
        "male": 120,
        "female": 110
      },
      "lifespan": 50,
      "ageOfMaturity": 14
    },
    "culturalAttributes": {
      "commonLanguages": ["Orcish", "Common"],
      "majorReligionsOrBeliefs": ["Shamanism", "Warrior Code"],
      "commonValues": ["Strength", "Courage"]
    }
  },
  {
    "raceName": "Gnome",
    "basePersonaMetrics": {
      "Adaptability": 105,
      "Discipline": 100,
      "Sociability": 115,
      "Empathy": 110,
      "Resilience": 85
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 100,
        "female": 95
      },
      "averageWeightKg": {
        "male": 40,
        "female": 35
      },
      "lifespan": 400,
      "ageOfMaturity": 40
    },
    "culturalAttributes": {
      "commonLanguages": ["Gnomish", "Common"],
      "majorReligionsOrBeliefs": ["Inventiveness", "Curiosity"],
      "commonValues": ["Creativity", "Ingenuity"]
    }
  },
  {
    "raceName": "Tiefling",
    "basePersonaMetrics": {
      "Adaptability": 95,
      "Discipline": 90,
      "Sociability": 85,
      "Empathy": 80,
      "Resilience": 105
    },
    "physicalAttributes": {
      "averageHeightCm": {
        "male": 180,
        "female": 175
      },
      "averageWeightKg": {
        "male": 80,
        "female": 75
      },
      "lifespan": 100,
      "ageOfMaturity": 20
    },
    "culturalAttributes": {
      "commonLanguages": ["Infernal", "Common"],
      "majorReligionsOrBeliefs": ["Individualism", "Self-Reliance"],
      "commonValues": ["Independence", "Resilience"]
    }
  }
];

export const raceNames = NPC_RACES.map(x => x.raceName);
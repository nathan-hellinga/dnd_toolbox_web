import { CorePersonaMetric } from "./types";

export type ITrait = {
  name: string,
  description: string,
  metricsAssociation: { [key in CorePersonaMetric]?: "positive" | "negative" }
}


export const NPC_TRAITS: ITrait[] = [
  {
    "name": "Curious Explorer",
    "description": "Loves discovering new places, ideas, and cultures.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Natural Leader",
    "description": "Takes charge and inspires others in group settings.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Keen Strategist",
    "description": "Excellent at planning and making well-thought-out decisions.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Compassionate Soul",
    "description": "Always empathetic and caring towards others.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Lone Wolf",
    "description": "Prefers solitude and operates best when alone.",
    "metricsAssociation": {
      "Sociability": "negative"
    }
  },
  {
    "name": "Eloquent Speaker",
    "description": "Skilled at verbal communication and persuasion.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Quick Thinker",
    "description": "Able to think and react quickly, especially under pressure.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Meticulous Planner",
    "description": "Pays great attention to detail and plans meticulously.",
    "metricsAssociation": {
      "Discipline": "positive"
    }
  },
  {
    "name": "Charismatic Leader",
    "description": "Naturally charming and persuasive, attracting followers easily.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Stoic Philosopher",
    "description": "Often deep in thought and unswayed by emotional turmoil.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Artistic Visionary",
    "description": "Has a unique and creative artistic vision.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Skilled Negotiator",
    "description": "Adept at negotiating deals and resolving conflicts.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Fearless Adventurer",
    "description": "Thrives in facing danger and exploring unknown territories.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Wise Counselor",
    "description": "Provides thoughtful advice based on wisdom and experience.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Innovative Inventor",
    "description": "Excels at creating novel and useful inventions.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Intuitive Healer",
    "description": "Has a natural talent for healing, both physical and emotional wounds.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Master Tactician",
    "description": "Brilliant at devising and executing complex strategies.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Charming Diplomat",
    "description": "Able to navigate complex social situations with ease and grace.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Gifted Orator",
    "description": "Captivates audiences with powerful and moving speech.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Mystic Seer",
    "description": "Possesses an uncanny ability to foresee events and interpret omens.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Daring Swashbuckler",
    "description": "Lives for thrilling exploits and daring escapades.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Steadfast Guardian",
    "description": "Unwavering in their duty to protect those in their care.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Sage Librarian",
    "description": "Knowledgeable and wise, a keeper of ancient lore and history.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Gallant Knight",
    "description": "Embodies the ideals of chivalry, bravery, and honor.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Cunning Rogue",
    "description": "Skilled in stealth and subterfuge, always one step ahead of their foes.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Mysterious Stranger",
    "description": "Enigmatic and elusive, always seems to know more than they let on.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Benevolent Ruler",
    "description": "Rules with kindness and a genuine concern for the well-being of their subjects.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Discipline": "positive"
    }
  }
];

export const NPC_FLAWS: ITrait[] = [
  {
    "name": "Overconfident",
    "description": "Excessively assured in their abilities, often to the point of recklessness.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Resilience": "negative"
    }
  },
  {
    "name": "Impulsive",
    "description": "Acts without thinking, often leading to trouble or unintended consequences.",
    "metricsAssociation": {
      "Adaptability": "negative",
      "Discipline": "negative"
    }
  },
  {
    "name": "Secretive",
    "description": "Hides their true intentions and feelings, making them hard to trust.",
    "metricsAssociation": {
      "Sociability": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Cynical",
    "description": "Tends to see the worst in people and situations, often demoralizing others.",
    "metricsAssociation": {
      "Empathy": "negative",
      "Sociability": "negative"
    }
  },
  {
    "name": "Stubborn",
    "description": "Unwilling to change their mind or adapt, even when it's clearly beneficial.",
    "metricsAssociation": {
      "Adaptability": "negative",
      "Resilience": "positive"
    }
  },
  {
    "name": "Easily Distracted",
    "description": "Struggles to maintain focus, often missing important details or tasks.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Adaptability": "positive"
    }
  },
  {
    "name": "Pessimistic",
    "description": "Always expects the worst, often leading to a lack of motivation or hope.",
    "metricsAssociation": {
      "Resilience": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Greedy",
    "description": "Excessively desires wealth or material possessions, often at the expense of others.",
    "metricsAssociation": {
      "Sociability": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Vindictive",
    "description": "Holds grudges and seeks revenge, often going out of their way to harm others.",
    "metricsAssociation": {
      "Empathy": "negative",
      "Discipline": "negative"
    }
  },
  {
    "name": "Arrogant",
    "description": "Has an inflated sense of self-importance, often alienating others.",
    "metricsAssociation": {
      "Sociability": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Naive",
    "description": "Lacks experience or judgment, often being easily deceived or manipulated.",
    "metricsAssociation": {
      "Resilience": "negative",
      "Adaptability": "positive"
    }
  },
  {
    "name": "Indecisive",
    "description": "Struggles to make decisions, often leading to missed opportunities or delays.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Resilience": "negative"
    }
  },
  {
    "name": "Short-Tempered",
    "description": "Quick to anger, often reacting in a rash and uncontrolled manner.",
    "metricsAssociation": {
      "Resilience": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Skeptical",
    "description": "Doubts or questions everything, often leading to trust issues and isolation.",
    "metricsAssociation": {
      "Sociability": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Nostalgic",
    "description": "Excessively focused on the past, often at the expense of the present or future.",
    "metricsAssociation": {
      "Adaptability": "negative",
      "Resilience": "positive"
    }
  },
  {
    "name": "Perfectionist",
    "description": "Demands perfection in everything, often leading to unnecessary stress or disappointment.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Adaptability": "negative"
    }
  },
  {
    "name": "Gullible",
    "description": "Easily believes others without question, often being misled or taken advantage of.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Resilience": "negative"
    }
  },
  {
    "name": "Melancholic",
    "description": "Prone to sadness or depression, often affecting their outlook on life.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Resilience": "negative"
    }
  },
  {
    "name": "Fearful",
    "description": "Easily scared or anxious, often preventing them from taking risks or trying new things.",
    "metricsAssociation": {
      "Adaptability": "negative",
      "Resilience": "negative"
    }
  },
  {
    "name": "Obsessive",
    "description": "Fixates on specific ideas or people, often to an unhealthy degree.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Alcoholic",
    "description": "Struggles with alcohol addiction, affecting their judgment and reliability.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Resilience": "negative"
    }
  },
  {
    "name": "Gambling Addict",
    "description": "Compulsively gambles, often leading to financial and personal problems.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Adaptability": "negative"
    }
  },
  {
    "name": "Shopaholic",
    "description": "Compulsively shops, leading to financial strain and hoarding tendencies.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Sociability": "positive"
    }
  },
  {
    "name": "Workaholic",
    "description": "Obsessed with work, often at the expense of personal relationships and health.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Thrill Seeker",
    "description": "Craves dangerous or risky experiences, often disregarding safety.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "negative"
    }
  },
  {
    "name": "Narcotic Dependence",
    "description": "Dependent on narcotics, affecting their health, decision-making, and social interactions.",
    "metricsAssociation": {
      "Resilience": "negative",
      "Discipline": "negative"
    }
  },
  {
    "name": "Kleptomaniac",
    "description": "Has a compulsion to steal, regardless of need or value.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Compulsive Liar",
    "description": "Frequently lies, often for no clear reason, undermining their trustworthiness.",
    "metricsAssociation": {
      "Sociability": "negative",
      "Empathy": "negative"
    }
  },
  {
    "name": "Overeater",
    "description": "Compulsively overeats, leading to potential health and self-esteem issues.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Resilience": "positive"
    }
  },
  {
    "name": "Internet Addict",
    "description": "Excessively uses the internet, often leading to social isolation and neglect of responsibilities.",
    "metricsAssociation": {
      "Discipline": "negative",
      "Adaptability": "negative"
    }
  }
]

export const NPC_GOALS: ITrait[] = [
  {
    "name": "Explore Unknown Lands",
    "description": "Seek to travel and discover new and uncharted territories.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Discipline": "negative"
    }
  },
  {
    "name": "Acquire Wealth",
    "description": "Aim to amass a substantial amount of wealth through various means.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Build a Legacy",
    "description": "Strive to create something that will outlast your own lifetime.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Sociability": "negative"
    }
  },
  {
    "name": "Gain Power",
    "description": "Aspire to attain a significant position of authority or control.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Foster Peace",
    "description": "Work towards creating harmony and preventing conflict in your community.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Discipline": "negative"
    }
  },
  {
    "name": "Revenge",
    "description": "Seek vengeance for a past wrong or injustice experienced.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Uncover a Mystery",
    "description": "Dedicate yourself to solving a complex or longstanding mystery.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Adaptability": "positive"
    }
  },
  {
    "name": "Protect Loved Ones",
    "description": "Ensure the safety and well-being of those you care about.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Adaptability": "negative"
    }
  },
  {
    "name": "Achieve Enlightenment",
    "description": "Pursue spiritual or philosophical understanding and insight.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "negative"
    }
  },
  {
    "name": "Start a Revolution",
    "description": "Instigate or lead significant social or political change.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Master an Art Form",
    "description": "Become exceptionally skilled in a particular artistic discipline.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "negative"
    }
  },
  {
    "name": "Create an Invention",
    "description": "Design and build a unique and innovative device or system.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Adaptability": "positive"
    }
  },
  {
    "name": "Overcome a Fear",
    "description": "Face and conquer a deep-seated personal fear or phobia.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Restore Honor",
    "description": "Work to regain respect and honor after a personal or familial failure.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "negative"
    }
  },
  {
    "name": "Find True Love",
    "description": "Search for a deep and meaningful romantic relationship.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Resilience": "negative"
    }
  },
  {
    "name": "Establish a Dynasty",
    "description": "Aim to build a powerful and lasting family legacy.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Discover Ancient Secrets",
    "description": "Seek to uncover and understand long-forgotten knowledge or history.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Defend the Realm",
    "description": "Dedicate oneself to the protection and defense of one's homeland.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Achieve Artistic Mastery",
    "description": "Strive to reach the pinnacle of artistic expression and skill.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "negative"
    }
  },
  {
    "name": "Explore the Depths",
    "description": "Venture into the unknown depths of the oceans or underground realms.",
    "metricsAssociation": {
      "Adaptability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Spread a Religion",
    "description": "Work to disseminate and establish a particular set of religious beliefs.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Perfect a Craft",
    "description": "Aim to become a master in a specific craft or trade.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Adaptability": "negative"
    }
  },
  {
    "name": "Lead a Movement",
    "description": "Take charge in leading a social or political movement for change.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Resilience": "positive"
    }
  },
  {
    "name": "Become a Scholar",
    "description": "Devote oneself to the pursuit of knowledge and learning.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Empathy": "negative"
    }
  },
  {
    "name": "Cultivate a Garden",
    "description": "Dedicate time and effort to creating and nurturing a beautiful garden.",
    "metricsAssociation": {
      "Empathy": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Forge Alliances",
    "description": "Work towards creating strong alliances and partnerships.",
    "metricsAssociation": {
      "Sociability": "positive",
      "Empathy": "positive"
    }
  },
  {
    "name": "Solve a Personal Mystery",
    "description": "Unravel a mystery or secret from one's own past.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Adaptability": "positive"
    }
  },
  {
    "name": "Build a Business Empire",
    "description": "Strive to create and expand a successful business venture.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Sociability": "positive"
    }
  },
  {
    "name": "Eradicate a Threat",
    "description": "Focus on eliminating a significant danger or menace.",
    "metricsAssociation": {
      "Resilience": "positive",
      "Discipline": "positive"
    }
  },
  {
    "name": "Compose a Masterpiece",
    "description": "Aspire to create a work of art or literature that will be remembered for ages.",
    "metricsAssociation": {
      "Discipline": "positive",
      "Adaptability": "negative"
    }
  }
]


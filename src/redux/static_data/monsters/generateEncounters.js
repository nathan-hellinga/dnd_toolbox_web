import { ALL_MONSTERS } from "@/redux/static_data/monsters/monsters";

/**
 *
 * @param rating the challenge rating we are looking for
 * @returns {*[]} at least one enemy as close to the target CR as possible
 */
export const getEnemyByCR = (rating, deviation = 0) => {
  let enemyOptions = [];
  while (enemyOptions.length === 0) {
    enemyOptions = ALL_MONSTERS.filter(
      (x) => x.cr >= rating - deviation && x.cr <= rating + deviation
    );
    if (enemyOptions.length === 0) deviation += 0.1;
  }
  return enemyOptions;
};

export const calculateXP = (cr) => {
  if (cr < 0.15) return 100;
  return Math.ceil(339.75 * Math.exp(0.2219 * cr));
};

export const generateEncounter = ({
  num_players = 4,
  level = 2,
  difficulty = 1,
} = {}) => {
  if (!num_players || num_players < 0) num_players = 4;
  if (!level || level < 0) level = 2;
  if (!difficulty || difficulty < 0.2) difficulty = 1;

  let multi = (difficulty * 1.5) / 2 + 0.5;

  let groupChallengeRating = (num_players / 4) * level * multi;

  const encounterTypes = [encounterSwarm, encounterPresident, encounterRandom];

  return encounterTypes[Math.floor(Math.random() * encounterTypes.length)](
    groupChallengeRating,
    num_players,
    level,
    difficulty
  );
};

// DIFFERENT ENCOUNTER TYPES

export const encounterPresident = (
  groupChallengeRating,
  num_players,
  level,
  difficulty
) => {
  let numGuards = num_players;
  const presidentChallenge = groupChallengeRating * 0.5;
  const guardChallenge = (groupChallengeRating * 0.5) / numGuards;

  const presidentialCandidates = getEnemyByCR(
    presidentChallenge,
    presidentChallenge * 0.05
  );
  const guardCandidates = getEnemyByCR(guardChallenge, guardChallenge * 0.05);

  let president =
    presidentialCandidates[
      Math.floor(Math.random() * presidentialCandidates.length)
    ];
  let guard =
    guardCandidates[Math.floor(Math.random() * guardCandidates.length)];

  const encounterChallengeRating = president.cr + guard.cr * numGuards;

  return {
    name: `${president.name} and ${guard.name}s`,
    type: "president",
    xp: calculateXP(encounterChallengeRating),
    num_enemies: numGuards + 1,
    encounter_challenge_rating: encounterChallengeRating,
    enemies: [
      { count: 1, details: president },
      { count: numGuards, details: guard },
    ],
  };
};

export const encounterSwarm = (
  groupChallengeRating,
  num_players,
  level,
  difficulty
) => {
  let numEnemies = Math.floor((Math.random() + 1) * num_players + 3);
  // lots of low level enemies are more deadly then few higher power enemies, lower power rating
  const adjustedChallengeRating = groupChallengeRating * 0.75;

  // Get a single enemy that we can fight multiple of
  let enemyOptions = getEnemyByCR(
    adjustedChallengeRating / numEnemies,
    adjustedChallengeRating * 0.05
  );

  let selectedEnemy =
    enemyOptions[Math.floor(Math.random() * enemyOptions.length)];
  // some enemies have a challenge rating of 0, in a swarm we should make this 0.05 or something non-zero
  if (selectedEnemy.cr === 0) selectedEnemy.cr = 0.02;

  // check if we accidentally made a way to hard encounter
  let encounterChallengeRating = numEnemies * selectedEnemy.cr;
  while (
    encounterChallengeRating > adjustedChallengeRating &&
    numEnemies >= num_players
  ) {
    numEnemies--;
    encounterChallengeRating = numEnemies * selectedEnemy.cr;
  }

  return {
    name: `Swarm of ${selectedEnemy.name}s`,
    type: "swarm",
    xp: calculateXP(encounterChallengeRating * 1.25),
    num_enemies: numEnemies,
    encounter_challenge_rating: encounterChallengeRating * 1.25,
    enemies: [{ count: numEnemies, details: selectedEnemy }],
  };
};

export const encounterRandom = (
  groupChallengeRating,
  num_players,
  level,
  difficulty
) => {
  // find a random creature with less than the groups CR, repeat until the remaining CR < some threshold
  let remainingCR = groupChallengeRating;
  let selectedEnemies = [];
  do {
    let enemyOptions = ALL_MONSTERS.filter(
      (x) =>
        x.cr <= remainingCR && x.cr >= (remainingCR > 1 ? remainingCR / 4 : 0)
    );
    if (!enemyOptions || enemyOptions.length === 0) break;
    const enemy = enemyOptions[Math.floor(Math.random() * enemyOptions.length)];

    const existingEnemyIndex = selectedEnemies.findIndex(
      (e) => e.details.name === enemy.name
    );
    if (existingEnemyIndex !== -1) {
      selectedEnemies[existingEnemyIndex].count += 1;
    } else {
      selectedEnemies.push({ count: 1, details: enemy });
    }

    remainingCR -= enemy.cr;
  } while (remainingCR >= Math.max(0.25, groupChallengeRating * 0.05));
  selectedEnemies.sort((x, y) => y.details.cr - x.details.cr);

  const encounterChallengeRating = selectedEnemies.reduce(
    (a, r) => (a += r.details.cr),
    0
  );

  return {
    name: `${selectedEnemies[0].details.name}${
      selectedEnemies.length > 1 ? " and others" : ""
    }`,
    type: "random fill",
    xp: calculateXP(encounterChallengeRating),
    num_enemies: selectedEnemies.reduce((a, r) => (a += r.count), 0),
    encounter_challenge_rating: encounterChallengeRating,
    enemies: selectedEnemies,
  };
};

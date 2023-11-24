import { maleMarkovModel } from "./maleModel";
import { femaleMarkovModel } from "./femaleModel";
import { surnameMarkovModel } from "./surnameModel";


function chooseStartingGram(startModel) {
  // Similar logic as chooseNextCharacter but for starting grams
  let total = Object.values(startModel).reduce((acc, cur) => acc + cur, 0);
  let rand = Math.random() * total;
  let sum = 0;

  for (let key in startModel) {
    sum += startModel[key];
    if (rand < sum) {
      return key;
    }
  }
}

function getWeightMultiplier(currentLength, maxLength) {
  // Linear increase from 1 to 50
  const maxMultiplier = 50;
  return 1 + ((maxMultiplier - 1) * (currentLength / maxLength));
}

function generateName(model, order = 3, maxLength = 25) {
  let currentGram = chooseStartingGram(model.start);
  let result = currentGram;

  while (result.length < maxLength) {
    let nextChar = chooseNextCharacter(model.grams[currentGram], result.length, maxLength);

    // Check if the next character is a blank string, indicating the end of a name
    if (nextChar === "" || nextChar === " ") {
      break;
    }

    result += nextChar;
    currentGram = result.substring(result.length - order, result.length);
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}

function chooseNextCharacter(gramModel, currentLength, maxLength) {
  let total = 0;
  let multiplier = getWeightMultiplier(currentLength, maxLength);

  // Apply the multiplier to the "" character
  let adjustedGramModel = { ...gramModel };
  if (adjustedGramModel[""]) {
    adjustedGramModel[""] *= multiplier;
  }

  // Calculate the total considering the adjusted weights
  total = Object.values(adjustedGramModel).reduce((acc, cur) => acc + cur, 0);

  let rand = Math.random() * total;
  let sum = 0;

  for (let key in adjustedGramModel) {
    sum += adjustedGramModel[key];
    if (rand < sum) {
      return key;
    }
  }
}

export const generateNPCName = (gender?: "male" | "female"): { first: string, last: string, full: string } => {
  const mm = maleMarkovModel;
  const fm = femaleMarkovModel;
  const sm = surnameMarkovModel;

  let firstNameModel = null;
  if (gender) {
    firstNameModel = gender === "male" ? mm : fm;
  } else {
    firstNameModel = Math.random() > 0.5 ? mm : fm;
  }


  const firstName = generateName(firstNameModel);
  const lastName = generateName(sm, 3, 30);

  return { first: firstName, last: lastName, full: [firstName, lastName].join(" ") };
};
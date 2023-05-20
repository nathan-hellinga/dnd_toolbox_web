import React from "react";
import PropTypes from "prop-types";
import style from "./encounterCard.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function EncounterCard(props) {
  const formatSpeeds = (speeds) => {
    let out = "";

    for (const [key, value] of Object.entries(speeds)) {
      out += `${key} ${value}, `;
    }
    // remove last comma and space
    return out.slice(0, -2);
  };

  const formatAbilityModifier = (score, brackets = true) => {
    const modifier = Math.floor((score - 10) / 2);
    let scoreString = modifier.toString();
    if (modifier === 0) return "";
    if (modifier > 0) scoreString = "+" + scoreString;

    if (brackets) return `(${scoreString})`;

    return scoreString;
  };

  const formatSavingThrows = (mDetails) => {
    // if all are null return null
    let svThrows = "";
    // load saving throw values
    let throws = {
      STR: mDetails.strength_save ?? 0,
      DEX: mDetails.dexterity_save ?? 0,
      CON: mDetails.constitution_save ?? 0,
      INT: mDetails.intelligence_save ?? 0,
      WIS: mDetails.wisdom_save ?? 0,
      CHA: mDetails.charisma_save ?? 0,
    };
    // format as strings
    for (let [key, value] of Object.entries(throws)) {
      if (value !== 0) {
        if (value > 0) value = "+" + value;
        svThrows += `${key} ${value}, `;
      }
    }
    if (svThrows === "") return null;
    return svThrows.slice(0, -2);
  };

  const formatSkills = (skills) => {
    let skillText = "";
    for (let [key, value] of Object.entries(skills)) {
      if (value !== 0) {
        if (value > 0) value = "+" + value;
        skillText += `${key} ${value}, `;
      }
    }

    if (skillText === "") return null;
    return skillText.slice(0, -2);
  };

  const formatActions = (actions, monsterID) => {
    if (actions === "") return null;
    return (
      <div>
        <div style={{ breakInside: "avoid" }}>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Actions
          </h2>
          <hr style={{ marginTop: 0 }} />
        </div>

        {actions.map((action, index) => {
          return (
            <p key={`${monsterID}_${action.name}`}>
              <strong>{action.name}. </strong>
              {action.desc}
            </p>
          );
        })}
      </div>
    );
  };

  const formatReactions = (reactions, monsterID) => {
    if (reactions === "") return null;
    return (
      <div>
        <div style={{ breakInside: "avoid" }}>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Reactions
          </h2>
          <hr style={{ marginTop: 0 }} />
        </div>
        {reactions.map((reaction, index) => {
          return (
            <p key={`${monsterID}_${reaction.name}`}>
              <strong>{reaction.name}. </strong>
              {reaction.desc}
            </p>
          );
        })}
      </div>
    );
  };

  const formatLegendaryActions = (actions, desc, monsterID) => {
    if (actions === "") return null;
    return (
      <div>
        <div style={{ breakInside: "avoid" }}>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Legendary Actions
          </h2>
          <p className={style.subtitle}>{desc}</p>
          <hr style={{ marginTop: 0 }} />
        </div>
        {actions.map((actions, index) => {
          return (
            <p key={`${monsterID}_${actions.name}`}>
              <strong>{actions.name}. </strong>
              {actions.desc}
            </p>
          );
        })}
      </div>
    );
  };

  const formatSpecialAbilities = (abilities, monsterID) => {
    if (abilities === "") return null;
    return (
      <div>
        <div style={{ breakInside: "avoid" }}>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Special Abilities
          </h2>
          <hr style={{ marginTop: 0 }} />
        </div>
        {abilities.map((ability, index) => {
          return (
            <p key={`${monsterID}_${ability.name}`}>
              <strong>{ability.name}. </strong>
              {ability.desc}
            </p>
          );
        })}
      </div>
    );
  };

  const monsterAccordionCard = (monster, index) => {
    return (
      <Accordion key={`monster_${monster.details.slug}`}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
          style={{
            lineHeight: 0.85,
            fontSize: "1.35em",
            color: "var(--color-primary)",
          }}
        >
          <div>
            {monster.details.name}{" "}
            {monster.count > 1 && (
              <span
                style={{
                  opacity: 0.75,
                  color: "var(--color-highlight-dark)",
                }}
              >
                (x{monster.count})
              </span>
            )}
            <Typography
              style={{
                opacity: 0.75,
                fontStyle: "italic",
                fontSize: "0.6em",
                color: "var(--color-highlight-dark)",
                display: "block",
              }}
            >
              {monster.details.size} {monster.details.type},{" "}
              {monster.details.alignment}
            </Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails className={style.body}>
          <div>
            <p>
              <strong>Armor Class</strong> {monster.details.armor_class}{" "}
              <span style={{ opacity: 0.5, fontStyle: "italic" }}>
                {monster.details.armor_desc}
              </span>
            </p>
            <p>
              <strong>Hit Points</strong> {monster.details.hit_points}
            </p>
            <p>
              <strong>Speed </strong>
              {formatSpeeds(monster.details.speed)}
            </p>
          </div>

          <div className={style.hr} />

          <div className={style.spreadBox}>
            <div>
              STR <br /> {monster.details.strength}{" "}
              {formatAbilityModifier(monster.details.strength)}
            </div>
            <div>
              DEX <br /> {monster.details.dexterity}{" "}
              {formatAbilityModifier(monster.details.dexterity)}
            </div>
            <div>
              CON <br /> {monster.details.constitution}{" "}
              {formatAbilityModifier(monster.details.constitution)}
            </div>
            <div>
              INT <br /> {monster.details.intelligence}{" "}
              {formatAbilityModifier(monster.details.intelligence)}
            </div>
            <div>
              WIS <br /> {monster.details.wisdom}{" "}
              {formatAbilityModifier(monster.details.wisdom)}
            </div>
            <div>
              CHA <br /> {monster.details.charisma}{" "}
              {formatAbilityModifier(monster.details.charisma)}
            </div>
          </div>

          <div className={style.hr} />

          <div>
            {formatSavingThrows(monster.details) !== null && (
              <p>
                <strong>Saving Throws </strong>
                {formatSavingThrows(monster.details)}
              </p>
            )}
            {monster.details.skills !== undefined &&
              formatSkills(monster.details.skills) !== null && (
                <p>
                  <strong>Skills </strong>{" "}
                  {formatSkills(monster.details.skills)}
                </p>
              )}
            {monster.details.damage_vulnerabilities !== "" && (
              <p>
                <strong>Vulnerability </strong>
                {monster.details.damage_vulnerabilities}
              </p>
            )}
            {monster.details.damage_resistances !== "" && (
              <p>
                <strong>Resistance </strong>
                {monster.details.damage_resistances}
              </p>
            )}
            {monster.details.damage_immunities !== "" && (
              <p>
                <strong>Immunity </strong>
                {monster.details.damage_immunities}
              </p>
            )}
            {monster.details.condition_immunities !== "" && (
              <p>
                <strong>Condition Immunity </strong>
                {monster.details.condition_immunities}
              </p>
            )}
            {monster.details.senses !== "" && (
              <p>
                <strong>Senses </strong>
                {monster.details.senses}
              </p>
            )}
            {monster.details.languages !== "" && (
              <p>
                <strong>Languages </strong>
                {monster.details.languages}
              </p>
            )}
          </div>

          {formatActions(monster.details.actions, monster.details._id)}
          {formatReactions(monster.details.reactions, monster.details._id)}
          {formatLegendaryActions(
            monster.details.legendary_actions,
            monster.details.legendary_desc,
            monster.details._id
          )}
          {formatSpecialAbilities(
            monster.details.special_abilities,
            monster.details._id
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  if (!props.encounter) return null;

  return (
    <Paper className={[style.container, props.style].join(" ")}>
      <h1 className={style.title}>{props.encounter.name}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p className={style.subtitle}>
          Challenge Rating: {props.encounter.encounter_challenge_rating}
        </p>
        <p style={{ marginLeft: "auto" }} className={style.subtitle}>
          XP: {props.encounter.xp}
        </p>
      </div>
      {props.encounter.enemies.map((monster, index) =>
        monsterAccordionCard(monster, index)
      )}
    </Paper>
  );
}

EncounterCard.propTypes = {
  encounter: PropTypes.object,
};

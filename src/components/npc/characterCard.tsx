import React from "react";
import PropTypes from "prop-types";
import style from "./characterCard.module.css";
import { Paper, Typography } from "@mui/material";
import { NPC } from "../../redux/reducers/main.types";
import useMediaQueryBreakpoints from "@/hooks/useMediaQueryBreakpoints";

export default function CharacterCard({ character, onlyBody }: { character: NPC, onlyBody?: boolean }) {
  if (!character) return null;
  const [xs, sm] = useMediaQueryBreakpoints();

  const formatTraitsAndFlaws = (items) => {
    return items.map((item, index) => (
      <p key={index}>
        <strong>{item.name}: </strong>
        {item.description}
      </p>
    ));
  };

  const body = () => {
    return (
      <div className={style.body} style={{ paddingTop: 0 }}>
        <div className={style.hr} />
        <div className={style.spreadBox} style={{fontSize: sm ? "1em" : "0.6em"}}>
          <div>
            Adaptability <br /> {character.corePersonaMetrics.Adaptability >= 100 ? "+" : ""}{character.corePersonaMetrics.Adaptability - 100}%
          </div>
          <div>
            Empathy <br /> {character.corePersonaMetrics.Empathy >= 100 ? "+" : ""}{character.corePersonaMetrics.Empathy - 100}%
          </div>
          <div>
            Discipline <br /> {character.corePersonaMetrics.Discipline >= 100 ? "+" : ""}{character.corePersonaMetrics.Discipline - 100}%
          </div>
          <div>
            Sociability <br /> {character.corePersonaMetrics.Sociability >= 100 ? "+" : ""}{character.corePersonaMetrics.Sociability - 100}%
          </div>
          <div>
            Resilience <br /> {character.corePersonaMetrics.Resilience >= 100 ? "+" : ""}{character.corePersonaMetrics.Resilience - 100}%
          </div>
        </div>
        <div className={style.hr} />

        <Typography className={style.subtitle}>
          weight: {character.weightKg} kg - height: {character.heightCm} cm
        </Typography>

        <div>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Occupation
          </h2>
          <hr style={{ marginTop: 0 }} />
          {formatTraitsAndFlaws([character.occupation])}
        </div>

        <div>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Traits
          </h2>
          <hr style={{ marginTop: 0 }} />
          {formatTraitsAndFlaws(character.traits)}
        </div>


        <div>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Flaws
          </h2>
          <hr style={{ marginTop: 0 }} />
          {formatTraitsAndFlaws(character.flaws)}
        </div>

        <div>
          <h2 style={{ fontSize: "1.5em", margin: "1em 0 0 0.5em" }}>
            Goals
          </h2>
          <hr style={{ marginTop: 0 }} />
          {formatTraitsAndFlaws(character.goals)}
        </div>

      </div>
    );
  };


  if (onlyBody) return body();
  return (
    <Paper className={style.container}>
      <h1 className={style.title}>{character.name}</h1>
      <Typography className={style.subtitle}>
        {character.race} - {character.gender}, Age: {character.age}
      </Typography>

      {body()}


    </Paper>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  onlyBody: PropTypes.bool
};


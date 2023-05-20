import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxDeleteEncounter, reduxSaveEncounter } from "@/redux/actions";

export const useEncounters = ({
  num_players = null,
  level = null,
  difficulty = null,
} = {}) => {
  const [randomEncounter, setEncounter] = useState(null);
  const [savedEncounters, setSavedEncounters] = useState([]);
  const savedEncountersRedux = useSelector(
    (state) => state.main.encounters.saved
  );
  const dispatch = useDispatch();

  useEffect(() => {
    generateRandomEncounter({ num_players, level, difficulty });
  }, []);

  useEffect(() => {
    setSavedEncounters(savedEncountersRedux);
  }, [savedEncountersRedux]);

  const generateRandomEncounter = async ({
    num_players = null,
    level = null,
    difficulty = null,
  } = {}) => {
    const { generateEncounter } = await import(
      "@/redux/static_data/monsters/generateEncounters"
    );
    setEncounter(generateEncounter({ num_players, level, difficulty }));
  };

  const saveEncounter = () => {
    dispatch(reduxSaveEncounter(randomEncounter));
  };

  const deleteEncounter = (encounter) => {
    dispatch(reduxDeleteEncounter(encounter));
  };

  return {
    randomEncounter,
    generateRandomEncounter,
    savedEncounters,
    saveEncounter,
    deleteEncounter,
  };
};

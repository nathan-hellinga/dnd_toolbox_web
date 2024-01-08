import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reduxDeleteEncounter, reduxSaveEncounter } from "../redux/actions";
import { IEncounter } from "@/redux/reducers/main.types";
import { useAppSelector } from "@/hooks/stateHooks";

export const useEncounters = ({
  num_players = null,
  level = null,
  difficulty = null,
} = {}) => {
  const [randomEncounter, setEncounter] = useState<IEncounter | null>(null);
  const [savedEncounters, setSavedEncounters] = useState<Array<IEncounter>>([]);
  const savedEncountersRedux = useAppSelector(
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

  const saveCustomEncounter = (encounter: IEncounter) => {
    dispatch(reduxSaveEncounter(encounter));
  }

  const deleteEncounter = (encounter) => {
    dispatch(reduxDeleteEncounter(encounter));
  };

  return {
    randomEncounter,
    generateRandomEncounter,
    savedEncounters,
    saveEncounter,
    deleteEncounter,
    saveCustomEncounter
  };
};

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/stateHooks";
import { Item, NPC } from "@/redux/reducers/main.types";
import { generateNPC } from "../redux/static_data/npcs/generate";
import { reduxDeleteNPC, reduxSaveNPC } from "../redux/actions";

export const useNPCs = () => {
  const [randomNPC, setRandomNPC] = useState<NPC | null>(null);
  const [savedNPCS, setSaved] = useState<NPC[]>([])
  const savedNPCSRedux = useAppSelector((state) => state.main.npcs.saved);

  const dispatch = useDispatch();

  useEffect(() => {
    generateRandomNpc();
  }, []);

  useEffect(() => {
    setSaved(savedNPCSRedux);
  }, [savedNPCSRedux]);

  const generateRandomNpc = async () => {
    const x = generateNPC()
    setRandomNPC(x)
  };

  const saveNPC = (npc: NPC) => {
    dispatch(reduxSaveNPC(npc))
  }

  const deleteNPC = (npc: NPC) => {
    dispatch(reduxDeleteNPC(npc.id))
  }

  return { randomNPC, generateRandomNpc, savedNPCS, saveNPC, deleteNPC };
};

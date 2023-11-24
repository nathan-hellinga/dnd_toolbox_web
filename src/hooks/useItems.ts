import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxDeleteItem, reduxSaveItem } from "../redux/actions";
import { useAppSelector } from "@/hooks/stateHooks";
import { Item } from "@/redux/reducers/main.types";

export const useItems = ({ rarity = null } = {}) => {
  const [randomItem, setItem] = useState(null);
  const [savedItems, setSavedItems] = useState<Array<Item>>([]);
  const savedItemsRedux = useAppSelector((state) => state.main.items.saved);
  const dispatch = useDispatch();

  useEffect(() => {
    generateRandomItem();
  }, []);

  useEffect(() => {
    setSavedItems(savedItemsRedux);
  }, [savedItemsRedux]);

  const generateRandomItem = async () => {
    const { generateRandomItem } = await import(
      "@/redux/static_data/items/generate"
    );
    setItem(generateRandomItem({ rarity: rarity }));
  };

  const saveItem = () => {
    dispatch(reduxSaveItem(randomItem));
  };

  const deleteItem = (item) => {
    dispatch(reduxDeleteItem(item));
  };

  return { randomItem, generateRandomItem, savedItems, saveItem, deleteItem };
};

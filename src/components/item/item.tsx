import React from "react";
import style from "./item.module.css";
import PropTypes from "prop-types";
import ItemModParser from "@/components/item/itemModParser";
import { Button } from "@mui/material";

export default function Item(props) {
  const checkImage = () => {
    let uploadedImages = [
      "amulet",
      "arrows(20)",
      "battleaxe",
      "belt",
      "clothboots",
      "club",
      "crossbow",
      "dagger",
      "flail",
      "flask",
      "greataxe",
      "greatclub",
      "greatsword",
      "handaxe",
      "javelin",
      "leatherarmour",
      "leatherboots",
      "leathergloves",
      "leatherhelmet",
      "lighthammer",
      "longsword",
      "mace",
      "mailarmour",
      "mailgloves",
      "platearmour",
      "plateboots",
      "plategloves",
      "platehelmet",
      "quarterstaff",
      "ring",
      "shield",
      "shortbow",
      "sickle",
      "silkhood",
      "silkrobes",
      "spear",
      "warhammer",
    ];

    return (
      uploadedImages.indexOf(
        props.item.typeId.name.replace(/\s/g, "").toLowerCase()
      ) >= 0
    );
  };

  if (!props.item) return null;

  return (
    <div
      className={[
        style.itemCard,
        props.small && style.small,
        props.item.power === 1 && style.rarity1,
        props.item.power === 2 && style.rarity2,
        props.item.power === 3 && style.rarity3,
      ].join(" ")}
    >
      {/*ITEM NAME*/}

      <h1>{props.item.name}</h1>

      {/*IMAGE STUFF*/}
      <div
        className={[style.imageContainer, props.small && style.imageSmall].join(
          " "
        )}
      >
        <img
          src={
            checkImage()
              ? `https://dndtoolbox.nyc3.digitaloceanspaces.com/${props.item.typeId.name
                  .replace(/\s/g, "")
                  .toLowerCase()}.png`
              : "/item_under_construction.png"
          }
          alt={"item artwork"}
        />
      </div>

      {/*STAT BLOCK: KEYWORDS & PRICE*/}
      <div className={style.statContainer}>
        {props.item.stats !== "" && (
          <p className={style.statText}>{props.item.stats}</p>
        )}

        <div className={style.statPrice}>
          <p>{props.item.cost}</p>
          <img alt={"item cost"} src={"/coins-dollar-sign.svg"} />
        </div>
      </div>

      {/*ITEM FLAVOUR AND MODS*/}
      <div className={style.itemBody}>
        <p className={style.itemFlavor}>{props.item.flavor}</p>
        <ul>
          {props.item.mods.map((mod, index) => (
            <ItemModParser key={"itemmod" + index} mod={mod} index={index} />
          ))}
        </ul>
      </div>
      {props.edit && (
        <Button
          style={{ margin: "8px", fontSize: "inherit" }}
          variant={"outlined"}
          color={"error"}
          onClick={() => !!props.onDelete && props.onDelete(props.item)}
        >
          Delete
        </Button>
      )}
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  small: PropTypes.bool,
  edit: PropTypes.bool,
  onDelete: PropTypes.func,
};

import { Autocomplete, Box, TextField } from "@mui/material";
import { ITEM_BASE_TYPES } from "@/redux/static_data/items/baseTypes";
import { ItemBaseType } from "../../redux/reducers/main.types";
import { useState } from "react";
import Fuse, { IFuseOptions } from "fuse.js";

type SearchType = ItemBaseType & { slot?: string };

const mapBaseTypes = (x: any[]): SearchType[] => {
  return x.reduce((a, r) => {
    return [...a, ...r.types.map((t) => ({ ...t, slot: r.slot }))];
  }, []);
};

const BASE_TYPES: SearchType[] = mapBaseTypes(ITEM_BASE_TYPES);
const ALL_TYPE: SearchType = { name: "All Types", cost: 0, stats: null };

export default function ({
  onSelect,
}: {
  onSelect: (value: ItemBaseType) => void;
}) {
  const [value, setValue] = useState(ALL_TYPE);
  const [search, setSearch] = useState("");

  const fuseOptions: IFuseOptions<any> = {
    keys: [
      { name: "name", weight: 1 },
      { name: "slot", weight: 0.5 },
    ],
    isCaseSensitive: false,
    shouldSort: true,
    useExtendedSearch: true,
    threshold: 0.2,
    ignoreFieldNorm: true,
  };

  const fuse = new Fuse(BASE_TYPES, fuseOptions);

  const fuseFilterOptions = (options, { inputValue }) => {
    const results = fuse.search(inputValue, { limit: 20 });
    return [...results.map((result) => result.item), ALL_TYPE];
  };

  const handleInputChange = (e: any, newInputValue: string) => {
    setSearch(newInputValue);
  };

  const handleChange = (e: any, newValue: SearchType) => {
    setValue(newValue);
    if (onSelect) {
      if (newValue.name === ALL_TYPE.name) {
        onSelect(null);
      } else {
        onSelect(newValue);
      }
    }
  };

  return (
    <Autocomplete
      size={"small"}
      sx={{ pt: 1 }}
      value={value}
      onChange={handleChange}
      inputValue={search}
      onInputChange={handleInputChange}
      filterOptions={fuseFilterOptions}
      clearIcon={false}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Item Types"
          placeholder={"start typing to select Item base type"}
          inputProps={{
            ...params.inputProps,
            autoComplete: "false",
            name: "hidden",
            type: "text",
          }}
        />
      )}
      options={BASE_TYPES}
      getOptionLabel={(option: SearchType) => option.name}
      renderOption={(props, option: SearchType) => (
        <Box component="li" {...props}>
          {option.name}
        </Box>
      )}
    />
  );
}

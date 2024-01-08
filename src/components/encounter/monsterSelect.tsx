import { Autocomplete, Box, Chip, Stack, TextField } from "@mui/material";
import { ALL_MONSTERS } from "@/redux/static_data/monsters/monsters";
import { Monster } from "../../redux/reducers/main.types";
import { useState } from "react";
import Fuse, { IFuseOptions } from "fuse.js";

// Pro-process the monster data a little bit
// the data is messy
const removeDuplicates = (data: Monster[]) => {
  console.log("PREPROCESSING");
  const seen = new Map();
  return data.filter(item => {
    if (!seen.has(item.name)) {
      seen.set(item.name, true);
      return true;
    }
    return false;
  });
};
const UNIQUE_MONSTER_DATA = removeDuplicates(ALL_MONSTERS);

export default function({ onSelect }: { onSelect: (value: Monster) => void }) {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("");

  const fuseOptions: IFuseOptions<any> = {
    keys: ["name"],
    includeScore: true,
    isCaseSensitive: false,
    shouldSort: true,
    useExtendedSearch: true
  };


  const fuse = new Fuse(UNIQUE_MONSTER_DATA, fuseOptions);

  const fuseFilterOptions = (options, { inputValue }) => {
    const results = fuse.search(inputValue, { limit: 20 });
    return results.map(result => result.item);
  };

  const handleInputChange = (e: any, newInputValue: string) => {
    setSearch(newInputValue);
  };

  const handleChange = (e: any, newValue: Monster) => {
    // setValue(newValue);
    if (onSelect)
      onSelect(newValue);
  };

  return <Autocomplete
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
        label="Search Monsters"
        placeholder={"start typing to search monsters"}
        inputProps={{
          ...params.inputProps,
          autoComplete: "false",
          name: "hidden",
          type: "text"
        }}
      />)}
    options={ALL_MONSTERS}
    getOptionLabel={(option: Monster) => option.name}
    renderOption={(props, option: Monster) => (
      <Box component="li" {...props}>

        {option.name}
        <Stack direction={"row"} spacing={1} style={{ marginLeft: "auto", marginRight: 0 }}>
          <Chip variant={"outlined"} label={`cr: ${option.cr}`} />
        </Stack>
      </Box>
    )}
  />;
}
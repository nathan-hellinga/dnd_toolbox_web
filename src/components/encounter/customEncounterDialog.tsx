import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MonsterSelect from "./monsterSelect";
import EncounterCard from "./encounterCard";
import { Enemy, IEncounter, Monster } from "../../redux/reducers/main.types";
import { calculateXP } from "../../helpers/calulateXP";
import style from "./encounterCard.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const emptyEncounter = {
  name: "",
  encounter_challenge_rating: 0,
  enemies: [],
  xp: 0,
  num_enemies: 0,
  type: "custom",
};

export default function ({
  open,
  onClose,
  onSave,
}: {
  open: Boolean;
  onClose: () => void;
  onSave: (encounter: IEncounter) => void;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [encounterState, setEncounterState] =
    useState<IEncounter>(emptyEncounter);

  const updateStats = (e: IEncounter) => {
    // update CR
    const encounter_challenge_rating = e.enemies.reduce((a, r) => {
      return a + r.details.cr * r.count;
    }, 0);

    // update XP
    const xp = calculateXP(encounter_challenge_rating);

    return { encounter_challenge_rating, xp };
  };

  const handleNewMonster = (value: Monster) => {
    const exists = encounterState.enemies.find(
      (x) => x.details.name === value.name
    );
    if (exists) {
      setEncounterState((prev) => {
        const updated = {
          ...prev,
          enemies: prev.enemies.map((x) => {
            if (x.details.name === value.name) {
              x.count += 1;
            }
            return x;
          }),
        };
        return { ...updated, ...updateStats(updated) };
      });
    } else {
      setEncounterState((prev) => {
        const updated = {
          ...prev,
          enemies: [...prev.enemies, { count: 1, details: value }],
        };
        return { ...updated, ...updateStats(updated) };
      });
    }
  };

  const handleMonsterQuantChange = (value: Enemy, change: -1 | 1) => {
    const exists = encounterState.enemies.find(
      (x) => x.details.name === value.details.name
    );

    // check if we can just remove it
    if (exists.count === 1 && change === -1) {
      setEncounterState((prev) => {
        const updated = {
          ...prev,
          enemies: prev.enemies.filter(
            (x) => x.details.name !== value.details.name
          ),
        };
        return { ...updated, ...updateStats(updated) };
      });
    } else {
      setEncounterState((prev) => {
        const updated = {
          ...prev,
          enemies: prev.enemies.map((x) => {
            if (x.details.name !== value.details.name) {
              return x;
            } else {
              return {
                ...x,
                count: x.count + change,
              };
            }
          }),
        };
        return { ...updated, ...updateStats(updated) };
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const clearForm = () => {
    setName("");
    setEncounterState(emptyEncounter);
    setNameError(false);
  };

  const handleClose = () => {
    clearForm();
    if (onClose) onClose();
  };

  const handleSubmit = () => {
    if (name === "") {
      setNameError(true);
    } else {
      if (onSave) {
        onSave({ ...encounterState, name });
        clearForm();
      }
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Create a custom encounter
      </DialogTitle>
      <DialogContent>
        <MonsterSelect onSelect={handleNewMonster} />
        <Box mt={4} mb={4}>
          <EncounterCard
            encounter={encounterState}
            titleEl={
              <Box p={1}>
                <TextField
                  error={nameError}
                  value={name}
                  onChange={handleNameChange}
                  variant={"filled"}
                  fullWidth
                  label={"Title"}
                />
              </Box>
            }
            customSummaryEl={(enemy: Enemy) => {
              return (
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mr={2}
                >
                  <IconButton
                    size={"small"}
                    className={style.iconButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMonsterQuantChange(enemy, -1);
                    }}
                  >
                    <RemoveIcon color={"primary"} />
                  </IconButton>
                  <IconButton
                    size={"small"}
                    className={style.iconButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMonsterQuantChange(enemy, 1);
                    }}
                  >
                    <AddIcon color={"primary"} />
                  </IconButton>
                </Stack>
              );
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button sx={{ mr: 2 }} color={"grey"} onClick={handleClose}>
          Cancel
        </Button>
        <Button
          sx={{ pl: 4, pr: 4 }}
          variant={"contained"}
          onClick={handleSubmit}
          disabled={encounterState.enemies.length === 0}
        >
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
}

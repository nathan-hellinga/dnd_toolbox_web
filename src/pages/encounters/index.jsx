import HomeLayout from "@/layout";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import useMediaQueryBreakpoints from "@/hooks/useMediaQueryBreakpoints";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useEncounters } from "@/hooks/useEncounters";
import EncounterCard from "@/components/encounter/encounterCard";

export default function Index() {
  const {
    randomEncounter,
    generateRandomEncounter,
    saveEncounter,
    savedEncounters,
    deleteEncounter,
  } = useEncounters({ num_players: 4, level: 1 });
  const [xs, sm, md] = useMediaQueryBreakpoints();
  const [editMode, setEditMode] = useState(false);

  const [players, setPlayers] = useState(4);
  const [level, setLevel] = useState(1);

  return (
    <>
      <main>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={"h3"} mt={4}>
                Random Encounter Generator
              </Typography>
              <Typography variant={"body2"} paragraph>
                Step up your DnD game with unexpected twists and turns. With our
                Random Encounters Generator, every journey is packed with fresh
                suspense and excitement. Generate instant encounters for those
                unplanned travels or plot twists. From harmless wildlife to
                formidable foes, you never know what's around the corner. Click,
                save, and immerse yourself in the thrill of the unpredictable.
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} flexDirection={"column"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                mb={2}
              >
                <FormControl>
                  <InputLabel id={"player_count_label"}>Players</InputLabel>
                  <Select
                    sx={{ width: "100px" }}
                    size={"small"}
                    labelId="player_count_label"
                    value={players}
                    label="Players"
                    onChange={(e) => setPlayers(e.target.value)}
                  >
                    {Array.from(Array(10).keys()).map((i) => (
                      <MenuItem value={i + 1}>{i + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button
                  // style={{
                  //   justifyContent: "center",
                  //   margin: "0 auto 16px auto",
                  // }}
                  variant={"contained"}
                  onClick={() =>
                    generateRandomEncounter({
                      num_players: players,
                      level: level,
                    })
                  }
                >
                  {md ? "Generate new random encounter" : "New"}
                </Button>

                <FormControl>
                  <InputLabel id={"player_level_label"}>Level</InputLabel>
                  <Select
                    sx={{ width: "100px" }}
                    size={"small"}
                    labelId="player_level_label"
                    value={level}
                    label="Level"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    {Array.from(Array(40).keys()).map((i) => (
                      <MenuItem value={i + 1}>{i + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <EncounterCard encounter={randomEncounter} />
              <Button
                style={{ justifyContent: "center", margin: "0 auto" }}
                variant={"outlined"}
                onClick={saveEncounter}
              >
                save encounter
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginTop: "40px" }}>Saved Encounters</Divider>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={() => setEditMode(!editMode)}>
                {editMode ? <CloseIcon /> : <EditIcon />}
              </IconButton>
            </Grid>
            {savedEncounters.map((encounter, index) => (
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                key={`savedencounter_${encounter.name}_${index}`}
              >
                {editMode && (
                  <Button
                    style={{ margin: "4px" }}
                    variant={"outlined"}
                    color={"error"}
                    onClick={() => deleteEncounter(encounter)}
                  >
                    delete encounter
                  </Button>
                )}
                <EncounterCard encounter={encounter} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

Index.getLayout = HomeLayout;

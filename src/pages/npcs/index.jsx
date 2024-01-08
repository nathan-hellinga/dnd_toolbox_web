import HomeLayout from "@/layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import useMediaQueryBreakpoints from "@/hooks/useMediaQueryBreakpoints";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNPCs } from "@/hooks/useNpcs";
import CharacterCard from "@/components/npc/characterCard";
import style from "@/components/npc/characterCard.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageMetadata from "@/components/util/PageMetadata";
import HeroImage from "@/components/display/HeroImage";

export default function Index() {
  const { randomNPC, generateRandomNpc, savedNPCS, deleteNPC, saveNPC } = useNPCs();
  const [xs, sm, md] = useMediaQueryBreakpoints();
  const [editMode, setEditMode] = useState(false);


  return (
    <>
      <PageMetadata pageTitle={"NPC Generator: Bring Characters to Life"} />
      <main>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={"h3"} mt={4}>
                NPC Generator
              </Typography>
              <Typography variant={"body2"} paragraph>
                Step into a world of endless possibilities with our Random NPC Generator, ideal for Dungeons & Dragons
                and all your tabletop RPG adventures. Instantly create vivid NPCs and explore their family histories
                with ease. From mysterious lineage to unexpected alliances, our generator adds layers of depth to your
                game. Perfect for DMs and players, it's your go-to tool for crafting compelling characters and enriching
                your storytelling. Discover new connections and bring your fantasy world to life in every session.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h5"}>
                Core Persona Metrics Explained
              </Typography>
              <hr style={{ marginTop: 0 }} />
              <div className={style.body}>
                <Typography variant={"body1"} paragraph>
                  <strong>Adaptability:</strong> This metric measures the NPC's ability to adjust to new situations and
                  think on their feet.
                </Typography>
                <Typography variant={"body1"} paragraph>
                  <strong>Discipline:</strong> Indicates the level of self-control and organization the NPC possesses.
                </Typography>
                <Typography variant={"body1"} paragraph>
                  <strong>Sociability:</strong> Reflects the NPC's inclination towards social interactions and their
                  interpersonal skills.
                </Typography>
                <Typography variant={"body1"} paragraph>
                  <strong>Empathy:</strong> Measures the NPC's ability to understand and share the feelings of others.
                </Typography>
                <Typography variant={"body1"} paragraph>
                  <strong>Resilience:</strong> Assesses the NPC's toughness and ability to recover quickly from
                  difficulties.
                </Typography>
              </div>

            </Grid>
            <Grid item xs={12} display={"flex"} flexDirection={"column"}>
              <Button
                style={{ justifyContent: "center", margin: "0px auto 50px auto" }}
                variant={"contained"}
                onClick={generateRandomNpc}
              >
                Generate new npc
              </Button>

              <CharacterCard character={randomNPC} />
              <Button
                style={{ justifyContent: "center", margin: "0 auto" }}
                variant={"outlined"}
                onClick={() => {
                  saveNPC(randomNPC);
                  generateRandomNpc()
                }}
              >
                save NPC
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginTop: "40px" }}>Saved NPC's</Divider>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={() => setEditMode(!editMode)}>
                {editMode ? <CloseIcon /> : <EditIcon />}
              </IconButton>
            </Grid>
            <div style={{ width: "100%", margin: "16px 0" }}>
              {savedNPCS.map((npc, index) => (
                <Accordion key={`character_${npc.id}`}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                    style={{
                      lineHeight: 0.85,
                      fontSize: "1.35em",
                      color: "var(--color-primary)"
                    }}
                  >
                    <div>
                      {npc.name}
                      <Typography
                        style={{
                          opacity: 0.75,
                          fontStyle: "italic",
                          fontSize: "0.6em",
                          color: "var(--color-highlight-dark)",
                          display: "block"
                        }}
                      >
                        {npc.race} - {npc.gender}, Age: {npc.age}
                      </Typography>
                    </div>
                    {editMode &&
                      <div style={{ marginLeft: "auto", marginRight: "8px" }}>
                        <Button color={"error"} onClick={() => deleteNPC(npc)}>Delete</Button>
                      </div>
                    }

                  </AccordionSummary>
                  <AccordionDetails>
                    <CharacterCard character={npc} onlyBody />
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>

          </Grid>
        </Container>
      </main>
    </>
  );
}

Index.getLayout = HomeLayout;

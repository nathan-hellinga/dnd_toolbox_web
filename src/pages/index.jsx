import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import HomeLayout from "@/layout";
import { useItems } from "@/hooks/useItems";
import Item from "@/components/item/item";
import NextLink from "next/link";
import { generateEncounter } from "@/redux/static_data/monsters/monsters";
import EncounterCard from "@/components/encounter/encounterCard";
import { useEncounters } from "@/hooks/useEncounters";

export default function Home() {
  const { randomItem } = useItems({ rarity: 3 });
  const { randomEncounter } = useEncounters({ num_players: 4, level: 8 });

  const FAQs = [
    {
      question: "Do I need to provide a credit card to sign up?",
      answer:
        "No, Carbon Act does not require you to provide a credit card to sign up. You can create an account and start tracking your carbon emissions immediately, without any upfront payment or commitment. We believe in making it as easy as possible for businesses of all sizes to take action towards a more sustainable future.",
    },
  ];

  return (
    <>
      <main>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} mt={8} mb={4}>
              <Typography
                variant={"h1"}
                color={"primary"}
                align={"center"}
                mb={-2}
              >
                DND Toolbox
              </Typography>
              <Typography
                variant={"h4"}
                color={"secondary.light"}
                style={{ opacity: 0.7 }}
                align={"center"}
              >
                Instant Magic. Infinite Adventure
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Item small item={randomItem} />
              <NextLink href={"/items"}>
                <Button style={{ margin: "0 auto" }} variant={"contained"}>
                  Try Items
                </Button>
              </NextLink>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <EncounterCard encounter={randomEncounter} />
              <NextLink href={"/encounters"}>
                <Button style={{ margin: "0 auto" }} variant={"contained"}>
                  Try Encounters
                </Button>
              </NextLink>
            </Grid>

            {/*  TODO encounter here */}

            <Grid item xs={12} mt={8}>
              <Typography paragraph>
                The journey to DND Toolbox started with a simple mission: to
                breathe new life into the DnD experience. Bland items and
                predictable encounters? We said goodbye to those. Our innovative
                approach takes a leaf from the action-packed pages of ARPG,
                creating a pool of mods that each item can draw from. The
                result? A treasure trove of unique, randomly generated magic
                items that keep the surprises coming.
              </Typography>
              <Typography paragraph>
                Keep in mind, the magic is strong with our tools. Some items
                might pack more punch than others, but that's all part of the
                excitement. When it comes to encounters, we've got you covered
                too. Unplanned travels in your DnD session? No worries, hit the
                generate button a few times, and voila - a ready-to-use
                encounter, complete with stat blocks.
              </Typography>
              <Typography paragraph>
                Think of DND Toolbox as your trusty sidekick, always ready to
                add a dash of instant magic and unexpected thrills to your
                campaign. Whether you're deep in a dungeon or exploring vast
                landscapes, our tools ensure the adventure never loses its
                spark. So, buckle up, and let's make every DnD session an
                unforgettable ride.
              </Typography>
              <Divider sx={{ margin: 4 }} />
              <Typography paragraph>
                DND Toolbox isn't just about making your game easier, it's about
                fueling your imagination and bringing your stories to life.
                Remember those spellbinding tales of legendary artifacts and
                mythical creatures that drew you into the world of DnD? We're
                here to help you create more of those. Your players will be on
                the edge of their seats, never knowing what surprise awaits them
                next. This is DnD reimagined, your way.
              </Typography>
              <Typography paragraph>
                From mighty warriors to cunning rogues, from mysterious
                sorcerers to noble paladins, DND Toolbox is the secret weapon
                for every hero. Step into a world of instant magic, where every
                click brings you closer to your epic destiny.
              </Typography>
              <Typography paragraph>
                Embrace the unknown. Roll the dice. Discover the magic of DND
                Toolbox.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

Home.getLayout = HomeLayout;

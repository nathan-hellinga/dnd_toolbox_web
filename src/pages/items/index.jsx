import HomeLayout from "@/layout";
import { useItems } from "@/hooks/useItems";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Item from "@/components/item/item";
import useMediaQueryBreakpoints from "@/hooks/useMediaQueryBreakpoints";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PageMetadata from "@/components/util/PageMetadata";
import ItemBaseSelect from "@/components/item/itemBaseSelect";

export default function Index() {
  const { randomItem, generateRandomItem, saveItem, savedItems, deleteItem } =
    useItems();
  const [xs, sm, md] = useMediaQueryBreakpoints();
  const [editMode, setEditMode] = useState(false);
  const [baseType, setBaseType] = useState(null);

  return (
    <>
      <PageMetadata
        pageTitle={"Magic Item Generator: Create Unique Artifacts"}
      />
      <main>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={"h3"} mt={4}>
                Magic Item Generator
              </Typography>
              <Typography variant={"body2"} paragraph>
                Dive into the limitless world of DnD magic items. Unearth unique
                artifacts with a simple click. Whether you're a dungeon master
                or a player, enhance your game with unexpected treasures. Save
                your favorites, generate new ones. Let the magic unfold.
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} flexDirection={"column"}>
              <Stack
                direction={sm ? "row" : "column"}
                alignItems={sm ? "flex-end" : "center"}
                justifyContent={"center"}
                spacing={2}
              >
                <Button
                  variant={"contained"}
                  onClick={() => generateRandomItem(baseType?.name)}
                >
                  Generate new random item
                </Button>
                <Box width={200}>
                  <ItemBaseSelect onSelect={(value) => setBaseType(value)} />
                </Box>
              </Stack>

              <Item item={randomItem} />
              <Button
                style={{ justifyContent: "center", margin: "0 auto" }}
                variant={"outlined"}
                onClick={saveItem}
              >
                save item
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginTop: "40px" }}>Saved Items</Divider>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={() => setEditMode(!editMode)}>
                {editMode ? <CloseIcon /> : <EditIcon />}
              </IconButton>
            </Grid>
            {savedItems.map((item, index) => (
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                key={`saveditem_${item.name}_${index}`}
              >
                <Item
                  edit={editMode}
                  small={md}
                  item={item}
                  onDelete={deleteItem}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

Index.getLayout = HomeLayout;

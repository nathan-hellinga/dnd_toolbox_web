import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NextLink from "next/link";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { reduxReset } from "@/redux/actions";

const drawerWidth = 240;

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // close the drawer when clicking a link
  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  const drawer = (
    <div>
      <Toolbar style={{ justifyContent: "center" }}>
        <Link href={"/"}>
          <img
            src={"/color-fs-textonly.png"}
            alt={"logo"}
            style={{
              height: "30px",
            }}
          />
        </Link>
        {/*<Typography color={"primary"} variant="h6" noWrap>*/}
        {/*  Carbon Act*/}
        {/*</Typography>*/}
      </Toolbar>
      {/* --- SIDEBAR LINKS --- */}
      <Typography align={"center"} gutterBottom>
        <Link href={"/items"}>Items</Link>
      </Typography>
      <Typography align={"center"} gutterBottom>
        <Link href={"/encounters"}>Encounters</Link>
      </Typography>
      <Typography align={"center"} gutterBottom>
        <Link href={"/npcs"}>NPCs</Link>
      </Typography>
    </div>
  );

  return (
    <>
      <AppBar elevation={0} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={"/"}>
            <img
              src={"/color-fs-textonly.png"}
              alt={"logo"}
              style={{
                height: "30px",
              }}
            />
          </Link>
          <Box sx={{ width: "20px" }} />

          <Typography
            sx={{
              margin: "0 15px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Link href={"/items"}>Items</Link>
          </Typography>
          <Typography
            sx={{
              margin: "0 15px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Link href={"/encounters"}>Encounters</Link>
          </Typography>
          <Typography
            sx={{
              margin: "0 15px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Link href={"/npcs"}>NPCs</Link>
          </Typography>

          {/* ALIGN RIGHT */}
          {/*<div style={{ marginLeft: "auto" }} />*/}
          {/*<Button color={"red"} onClick={() => dispatch(reduxReset())}>*/}
          {/*  RESET Redux*/}
          {/*</Button>*/}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          minHeight: "90vh",
          flexGrow: 1,
          p: 2,
          padding: 0,
        }}
      >
        <Toolbar />
        {children}
      </Box>
      <footer>
        <Divider sx={{ marginBottom: "15px", marginTop: "50px" }} />
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Copyright © {new Date().getFullYear()}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          <NextLink href="/legal/privacy-policy">Privacy Policy</NextLink>
          {" | "}
          <NextLink href="/legal/terms-of-service">Terms of Service</NextLink>
        </Typography>
      </footer>
    </>
  );
}

export default HomeLayout;

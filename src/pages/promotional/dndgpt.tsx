import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import HomeLayout from "@/layout";
import PageMetadata from "@/components/util/PageMetadata";
import HeroImage from "../../components/display/HeroImage";
import useMediaQueryBreakpoints from "@/hooks/useMediaQueryBreakpoints";

export default function PrivacyPolicyPage(props) {
  const [xs, sm, md] = useMediaQueryBreakpoints();

  return (
    <>
      <PageMetadata pageTitle={"Introducing DND-GPT: Revolutionize your Campaign"}
                    pageDescription={"Discover the future of Dungeon Mastering with DND Toolbox's Custom GPT - powered by OpenAI. Our advanced AI-driven tool revolutionizes game preparation and storytelling, offering personalized NPC creation, plot generation, and interactive game elements. Elevate your D&D campaigns with cutting-edge technology. Explore now!"} />
      <HeroImage image={"/dndgpt-promo-image-1.png"} alt={"DND GPT Promotional image"} />
      <Container>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h4" gutterBottom>
                Unleash the Power of AI in Your DnD Adventures
              </Typography>
              <Typography paragraph>
                Welcome to the next level of Dungeons and Dragons gameplay. The DND-GPT AI tool is a revolutionary
                assistant, designed to transform how you play and create your DnD campaigns. Harnessing the power of
                advanced AI, our tool can generate intricate characters, craft compelling stories, and build immersive
                worlds with unprecedented creativity and detail.
              </Typography>
              <Typography paragraph>
                Imagine an AI that not only understands the complexities of tabletop role playing games but also adds
                layers of depth to your
                game. From creating unpredictable plot twists to designing challenging encounters, DND-GPT is your
                gateway to an enriched gaming experience. Whether you're a seasoned Dungeon Master or a curious player,
                our tool opens up endless possibilities for adventure and excitement.
              </Typography>
              <Typography paragraph>
                Discover DND-GPT: Your ultimate assistant, architect, and oracle for extraordinary adventures. This
                isn't just a tool, it's your creative companion, story enhancer, and gateway to uncharted realms. With
                DND-GPT by your side, every campaign becomes a masterpiece of imagination, every encounter an epic tale.
                Embrace the future of gaming where your vision meets our innovation. Together, let's redefine the art of
                storytelling and transform every game into a legend. <strong><a target={"_blank"}
                                                                                href={"https://chat.openai.com/g/g-5uTipyqw7-dndtoolbox"}>Try
                now FREE, with an active OpenAI - ChatGPT Plus subscription</a></strong>
              </Typography>
              <a target={"_blank"}
                 href={"https://chat.openai.com/g/g-5uTipyqw7-dndtoolbox"}>
                <Button fullWidth={!sm} variant="contained" color="primary" size="large">
                  Start Your Adventure
                </Button>
              </a>

            </Paper>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" mt={2}>
            <img
              src="/powered-by-openai-badge-outlined-on-dark.svg" // Replace with your OpenAI badge URL
              alt="OpenAI Badge"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>

  );
}

PrivacyPolicyPage.getLayout = HomeLayout;

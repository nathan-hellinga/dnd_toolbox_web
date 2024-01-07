import Head from "next/head";

const PageMetadata = ({ pageTitle, pageDescription }: { pageTitle?: string, pageDescription?: string }) => {
  return (
    <Head>
      <title>{`DND Toolbox - ${pageTitle || "Unleash Instant Magic & Adventure in Your Campaign"}`}</title>
      <meta name="description"
            content={pageDescription || "Elevate your tabletop RPG experience with DND Toolbox - a versatile tool for Dungeon Masters, offering a range of features to dynamically generate essential elements for engaging and immersive gameplay."} />
      <meta name="keywords"
            content="Dungeons and Dragons, DND tools, magic items, TTRPG, game encounters, role-playing games, RPG tools, adventure gaming, DND item generator, NPC generator" />
      <meta name="robots" content="index,follow" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Open Graph Tags */}
      <meta property="og:title" content={"DND Toolbox"} />
      <meta property="og:description"
            content={pageDescription || "Elevate your tabletop RPG experience with DND Toolbox - a versatile tool for Dungeon Masters, offering a range of features to dynamically generate essential elements for engaging and immersive gameplay."} />
      <meta property="og:image" content="https://dndtoolbox.app/page_preview_banner.png" />
    </Head>
  );
};

export default PageMetadata;
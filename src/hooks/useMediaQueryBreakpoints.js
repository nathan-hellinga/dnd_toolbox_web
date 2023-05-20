import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../themes/index";

export default function useMediaQueryBreakpoints() {
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return [xs, sm, md, lg, xl];
}

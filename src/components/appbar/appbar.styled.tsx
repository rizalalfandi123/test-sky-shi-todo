import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Container, { ContainerProps } from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const appBarHeight = "105px";

export const StyledAppbar = styled(AppBar)<AppBarProps>(() => ({
  height: appBarHeight,
  color: "white",
  boxShadow: "none",
}));

export const AppbarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",

    // !: Remove default style
    [`${theme.breakpoints.up("sm")}`]: {
      padding: 0,
    },
  })
);

export const AppbarTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  fontSize: "24px",
  color: "white"
}));

export const AppContentContainer = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: appBarHeight,
  maxWidth: `${theme.breakpoints.values.md}px`,
  margin: "auto",
}));

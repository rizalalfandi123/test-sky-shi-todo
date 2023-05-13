import type { Breakpoint } from "@mui/material/styles";

import { Outlet } from "react-router-dom";

import {
  AppContentContainer,
  AppbarContainer,
  AppbarTitle,
  StyledAppbar,
} from "./appbar.styled";

const appMaxWidth: Breakpoint = "md";

export const Appbar = () => {
  return (
    <>
      <StyledAppbar>
        <AppbarContainer maxWidth={appMaxWidth} data-cy="header-background">
          <AppbarTitle variant="h2" data-cy="header-title">
            TO DO LIST APP
          </AppbarTitle>
        </AppbarContainer>
      </StyledAppbar>

      <AppContentContainer maxWidth={appMaxWidth}>
        <Outlet />
      </AppContentContainer>
    </>
  );
};

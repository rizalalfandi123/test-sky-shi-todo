import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const ActivityCardContainer = styled(Box)<BoxProps>({
  padding: "27px",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0,0,0,.15)",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
});

export const ActivityCardTitle = styled(Typography, { shouldForwardProp: (propName) => propName !== "isActive" })<
  TypographyProps & { isActive: boolean }
>(({ isActive }) => ({
  textDecoration: isActive ? "line-through" : "none",
  color: isActive ? "#888" : "inherit",
}));

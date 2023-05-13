import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";

export const ActivityGroupCardContainer = styled(Box)<BoxProps>(({ theme }) => ({
  height: "234px",
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
  width: "100%",
  backgroundColor: "white",
  borderRadius: `${theme.shape.borderRadius}px`,
  padding: "22px 27px",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer"
}));

export const ActivityGroupCardTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  fontSize: "18px",
  flexGrow: 1,
  display: "flex",
  lineHeight: "27px",
  overflow: "hidden",
});

export const ActivityGroupCardFooter = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  color: "#888888",
  alignItems: "center",
}));

export const ActivityGroupCardDate = styled(Typography)<TypographyProps>({
  fontSize: "14px",
});

export const ActivityGroupCardButtonDelete = styled(IconButton)<IconButtonProps>({
  padding: 0,
});

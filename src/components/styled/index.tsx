import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const AddButton = styled(LoadingButton)<LoadingButtonProps>(() => ({
  height: "54px",
  minWidth: "170px",
  borderRadius: "45px",
  fontWeight: 600,
  fontSize: "18px",
}));

export const PageTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  fontSize: "36px",
}));
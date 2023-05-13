import { SxProps, Theme, styled, darken } from "@mui/material/styles";
import Stack, { StackProps } from "@mui/material/Stack";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

export const DeleteAlertContainer = styled(Stack)<StackProps>({
  width: "490px",
  height: "355px",
  padding: "50px 58px",
});

export const DeleteAlertMessage = styled(Stack)<StackProps>({
  fontSize: "18px",
  textAlign: "center",
});

export const DeleteAlertButton = styled(LoadingButton)<LoadingButtonProps>({
  borderRadius: "45px",
  padding: "13px 14px",
  height: "54px",
  width: "150px",
});

export const buttonCancelStyle: SxProps<Theme> = {
  backgroundColor: "#F4F4F4",
  color: "#4A4A4A",

  ":hover": {
    backgroundColor: darken("#F4F4F4", 0.08),
  },
};

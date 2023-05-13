import { styled } from "@mui/material/styles";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";


export const Title = styled(DialogTitle)<DialogTitleProps>({
  position: "relative",
  fontSize: "18px",
});

export const CloseButton = styled(IconButton)<IconButtonProps>({
  position: "absolute",
  right: "4px",
  top: "4px",
});

export const Content = styled(DialogContent)<DialogContentProps>({
  padding: "48px 41px 38px 30px",
});

export const SubmitButton = styled(LoadingButton)<LoadingButtonProps>(() => ({
    height: "54px",
    borderRadius: "45px",
    fontWeight: 600,
    fontSize: "18px",
    width: "150px"
  }));
  
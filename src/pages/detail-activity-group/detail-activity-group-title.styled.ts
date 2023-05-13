import { styled, Theme, SxProps } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { svgIconClasses } from "@mui/material/SvgIcon";

export const SwapButton = styled(IconButton)<IconButtonProps>(() => ({
  border: "1px solid #e5e5e5",
  height: "54px",
  width: "54px",
}));

export const EditButton = styled(IconButton)<IconButtonProps>(() => ({
  height: "54px",
  width: "54px",
}));

export const BackButton = styled(IconButton)<IconButtonProps>(() => ({
  height: "54px",
  width: "54px",

  [`& .${svgIconClasses.root}`]: {
    width: "2em",
    height: "2em",
    color: "#21253B",
  },
}));

export const inputStyle: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "36px",
};

import { COMMON, theme } from "@/assets/theme/theme";
import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

export const StyledToolbar = styled(Toolbar)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Search = styled("div")(({}) => ({
  backgroundColor: COMMON.common.white,
  color: theme.palette.text.primary,
  padding: "0 15px",
  borderRadius: "6px",
  width: "40%",
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

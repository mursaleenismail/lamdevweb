import { COMMON } from "@/assets/theme/theme";
import { Box, Modal, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

export const StyledModal = styled(Modal)(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const UserBox = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "25px",
}));

export const StyledDateModal = styled(Modal)(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

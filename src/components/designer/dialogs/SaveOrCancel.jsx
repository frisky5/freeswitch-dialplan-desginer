import { useContext } from "react";
import { designerContext } from "../contexts/Contexts.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function SaveOrCancel(props) {
  const context = useContext(designerContext);
  return (
    <Dialog open={false}>
      <DialogTitle title="Save or Cancel" />
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}

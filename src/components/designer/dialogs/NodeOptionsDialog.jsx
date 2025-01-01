import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
} from "@mui/material";
import { useContext } from "react";
import { designerContext } from "../contexts/Contexts.js";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CancelIcon from "@mui/icons-material/Cancel";
import { NODE_TYPES } from "../../../helpers/nodeGenerator.js";
import ConditionNodeOptions from "../options/ConditionNodeOptions.jsx";
import GenesisNodeOptions from "../options/GenesisNodeOptions.jsx";
import ExtensionNodeOptions from "../options/ExtensionNodeOptions.jsx";

export default function NodeOptionsDialog(props) {
  const context = useContext(designerContext);

  function dialogProps() {
    if (!context?.nodeOptionsDialogTarget?.type) return {};
    switch (context.nodeOptionsDialogTarget.type) {
      case NODE_TYPES.GENESIS:
        return { maxWidth: "sm", fullWidth: true };
      case NODE_TYPES.EXTENSION:
        return { fullScreen: true };
      case NODE_TYPES.CONDITION:
        return { maxWidth: "md", fullWidth: true };
    }
  }

  function handleCancel() {
    context.setOpenNodeOptionsDialog(false);
  }

  function renderOptions() {
    if (!context?.nodeOptionsDialogTarget?.type) return <></>;
    switch (context.nodeOptionsDialogTarget.type) {
      case NODE_TYPES.GENESIS:
        return <GenesisNodeOptions />;
      case NODE_TYPES.CONDITION:
        return <ConditionNodeOptions />;
      case NODE_TYPES.EXTENSION:
        return <ExtensionNodeOptions />;
    }
  }

  return (
    <Dialog
      TransitionComponent={Fade}
      keepMounted={false}
      fullScreen
      open={context?.openNodeOptionsDialog}
    >
      <DialogTitle>Edit Options</DialogTitle>
      <DialogContent>{renderOptions()}</DialogContent>
      <DialogActions sx={{ gap: 2 }}>
        <Button
          endIcon={<CancelIcon />}
          color={"warning"}
          onClick={handleCancel}
        >
          cancel
        </Button>
        <Button
          endIcon={<SaveAsIcon />}
          color={"success"}
          onClick={() => {
            context.setNodeOptionsDialogTarget(null);
          }}
        >
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

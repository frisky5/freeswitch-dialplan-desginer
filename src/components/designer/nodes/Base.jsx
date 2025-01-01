import { IconButton, Paper, Stack, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useContext, useRef } from "react";
import {
  NODE_NAME_BY_TYPE,
  NODE_TYPES,
} from "../../../helpers/nodeGenerator.js";
import { designerContext } from "../contexts/Contexts.js";
import { blue } from "@mui/material/colors";

export default function BaseNode(props) {
  const cardContentRef = useRef(0);
  const context = useContext(designerContext);

  function handleOptionsClick() {
    context.setNodeOptionsDialogTarget(props);
    context.setOpenNodesOptionsDialog(true);
  }

  return (
    <>
      <Paper
        id={`paper-${props.id}`}
        variant={"elevation"}
        {...props.paperProps}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          width={"100%"}
        >
          {/*  body  */}
          {props.children}
        </Stack>
      </Paper>
    </>
  );
}

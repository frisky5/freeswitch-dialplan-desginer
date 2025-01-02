import BaseNode from "./Base.jsx";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import TargetHandle from "../handles/TargetHandle.jsx";
import SourceHandle from "../handles/SourceHandle.jsx";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useContext } from "react";
import { designerContext } from "../contexts/Contexts.js";
import { produce } from "immer";

export default function Extension(props) {
  const context = useContext(designerContext);
  return (
    <BaseNode {...props}>
      <Stack
        height={"100%"}
        top={0}
        left={0}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        position="absolute"
      >
        {props.data?.inputHandles?.map((handle) => (
          <TargetHandle id={handle.id} key={handle.id} />
        ))}
      </Stack>
      <Stack width={"250px"} pr={3} pl={3} pt={2} pb={2}>
        <Stack
          className={"drag-handle__mover"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"h6"}>Logic Group</Typography>
          <IconButton
            disabled={context.nodesData[props.id]?.name === ""}
            color={"primary"}
            onClick={() => {
              context.setTopAppBarTitle(
                `Logic Group : ${context.nodesData[props.id]?.name}`,
              );
              context.setExtensionDesignerTarget(props);
              context.setOpenExtensionDesigner(true);
            }}
          >
            <AccountTreeIcon />
          </IconButton>
        </Stack>
        <TextField
          variant={"standard"}
          size={"small"}
          fullWidth={true}
          type={"text"}
          label="Name"
          value={context.nodesData[props.id]?.name}
          onChange={(e) => {
            context.setNodesData(
              produce((draft) => {
                draft[props.id].name = e.target.value;
              }),
            );
          }}
        />
      </Stack>
      <Stack
        height={"100%"}
        top={0}
        right={0}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        position="absolute"
      >
        {props.data.outputHandles.map((handle) => (
          <SourceHandle id={handle.id} key={handle.id} />
        ))}
      </Stack>
    </BaseNode>
  );
}

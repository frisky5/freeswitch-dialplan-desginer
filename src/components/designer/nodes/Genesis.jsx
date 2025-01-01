import BaseNode from "./Base.jsx";
import { Stack, TextField, Typography } from "@mui/material";
import SourceHandle from "../handles/SourceHandle.jsx";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { produce } from "immer";
import { useContext } from "react";
import { designerContext } from "../contexts/Contexts.js";

export default function Genesis(props) {
  const context = useContext(designerContext);
  return (
    <BaseNode {...props}>
      <Stack
        height={"100%"}
        top={0}
        right={0}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        position="absolute"
      >
        {props.data.outputHandles.map((handle) => (
          <SourceHandle id={handle.id} key={handle.id} style={{}} />
        ))}
      </Stack>
      <Stack
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        pr={3}
        pl={3}
        pt={2}
        pb={2}
      >
        <FlagCircleIcon color={"success"} sx={{ fontSize: "50px" }} />
        <TextField
          fullWidth
          size={"small"}
          variant={"standard"}
          label={"Context Name"}
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
    </BaseNode>
  );
}

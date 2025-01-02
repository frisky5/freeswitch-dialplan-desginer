import BaseNode from "./Base.jsx";
import { Button, IconButton, Stack } from "@mui/material";
import SourceHandle from "../handles/SourceHandle.jsx";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
export default function ExtensionGenesis(props) {
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
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        p={1}
      >
        <IconButton color="primary" size={"small"}>
          <ArrowCircleLeftIcon />
        </IconButton>
        <IconButton color="primary" size={"small"}>
          <FlagCircleIcon color={"success"} fontSize={"large"} />
        </IconButton>
      </Stack>
    </BaseNode>
  );
}

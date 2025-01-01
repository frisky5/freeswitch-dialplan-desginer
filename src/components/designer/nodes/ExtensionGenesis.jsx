import BaseNode from "./Base.jsx";
import { Stack } from "@mui/material";
import SourceHandle from "../handles/SourceHandle.jsx";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

export default function ExtensionGenesis(props) {
  return (
    <BaseNode {...props} paperProps={{ sx: { width: "50px", height: "50px" } }}>
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
      <FlagCircleIcon color={"success"} fontSize={"large"} />
    </BaseNode>
  );
}

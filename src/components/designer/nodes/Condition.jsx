import BaseNode from "./Base.jsx";
import { Stack, Typography } from "@mui/material";
import TargetHandle from "../handles/TargetHandle.jsx";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SourceHandle from "../handles/SourceHandle.jsx";

function Condition(props) {
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
          <Typography variant={"h6"}>Condition</Typography>

          <AccountTreeIcon />
        </Stack>
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

export default Condition;

import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import TargetHandle from "../handles/TargetHandle.jsx";
import SourceHandle from "../handles/SourceHandle.jsx";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Generic({ id, type, data, children, paperSx }) {
  return (
    <Paper
      id={`${type}-${id}`}
      sx={{
        minWidth: "200px",
        minHeight: "50px",
        height:
          data.outputHandles.length > 0
            ? `${data.outputHandles.length * 25}px`
            : "50px",
        ...paperSx,
      }}
    >
      <Stack width={"100%"}>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          alignItems={"space-between"}
        >
          <Stack
            width={"100%"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography>name</Typography>
            <Button
              variant={"contained"}
              onClick={() => {
                console.log("clicked");
              }}
              color={"error"}
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        height={"100%"}
        width={"100%"}
        top={0}
        left={0}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        position="absolute"
      >
        {data.inputHandles.map((handle) => (
          <TargetHandle id={handle.id} key={handle.id} />
        ))}
      </Stack>
      <Stack
        height={"100%"}
        top={0}
        right={0}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        position="absolute"
        flexWrap={"nowrap"}
        flexDirection={"column"}
      >
        {data.outputHandles.map((handle) => (
          <SourceHandle id={handle.id} key={handle.id} />
        ))}
      </Stack>
    </Paper>
  );
}

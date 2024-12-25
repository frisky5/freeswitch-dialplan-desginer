import Generic from "./Generic.jsx";
import { Stack, Typography } from "@mui/material";

export default function Genesis(props) {
  return (
    <Generic {...props} paperSx={{}}>
      <Stack
        height={"100%"}
        width={"100%"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>Start</Typography>
      </Stack>
    </Generic>
  );
}

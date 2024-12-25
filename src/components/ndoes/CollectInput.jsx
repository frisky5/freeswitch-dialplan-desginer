import Generic from "./Generic.jsx";
import { Stack, Typography } from "@mui/material";

function CollectInput(props) {
  return (
    <Generic {...props}>
      <Stack
        height={"100%"}
        width={"100%"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>Menu</Typography>
      </Stack>
    </Generic>
  );
}

export default CollectInput;

import Generic from "./Generic.jsx";
import { Stack, Typography } from "@mui/material";

function Condition(props) {
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
        <Typography>Condition</Typography>
      </Stack>
    </Generic>
  );
}

export default Condition;

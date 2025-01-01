import BaseNode from "./Base.jsx";
import { Stack, Typography } from "@mui/material";

function CollectInput(props) {
  return (
    <BaseNode {...props}>
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
    </BaseNode>
  );
}

export default CollectInput;

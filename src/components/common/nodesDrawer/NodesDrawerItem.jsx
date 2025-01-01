import { Paper, Stack, Typography } from "@mui/material";

import { NODE_TYPES } from "../../../helpers/nodeGenerator.js";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HelpIcon from "@mui/icons-material/Help";

export default function NodesDrawerItem({ tiny, onAdd, name, type }) {
  function icon() {
    switch (type) {
      case NODE_TYPES.EXTENSION:
        return <AccountTreeIcon color={"primary"} />;
      case NODE_TYPES.CONDITION:
        return <HelpIcon color={"primary"} />;
    }
  }

  return (
    <Paper
      sx={{
        width: tiny ? "50px" : "150px",
        height: tiny ? "50px" : "100px",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.1)" },
        transition: "all 0.2s",
      }}
      onClick={() => {
        onAdd(type);
      }}
    >
      <Stack
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        {icon()}
        <Typography
          hidden={tiny}
          textAlign={"center"}
          sx={{
            userSelect: "none",
            transform: tiny ? "scale(0)" : "scale(1)",
            transition: "all 0.2s",
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Paper>
  );
}

import { useContext } from "react";
import { designerContext } from "../contexts/Contexts.js";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function ConditionNodeOptions(props) {
  const context = useContext(designerContext);

  return (
    <Stack height={"100%"} width={"100%"} pt={1}>
      <Stack width={"100%"} direction={"row"} flexWrap={"nowrap"} gap={1}>
        <TextField
          fullWidth
          title={"Field"}
          label={"Field"}
          helperText={"Enter the variable name to match with the Expression"}
        />
        <TextField
          fullWidth
          title={"Expression"}
          label={"Expression"}
          helperText={"Enter Regex to match on"}
        />

        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

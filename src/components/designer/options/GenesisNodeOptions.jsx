import { Stack, TextField } from "@mui/material";

export default function GenesisNodeOptions(props) {
  return (
    <Stack minWidth={"200px"} p={2}>
      <TextField
        fullWidth
        helperText={
          "Enter the Name of the context (Context of the FreeSWITCH Dialplan)"
        }
        label={"Context Name"}
        title={"Context Name"}
      />
    </Stack>
  );
}

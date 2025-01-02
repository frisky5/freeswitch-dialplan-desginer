import { useContext } from "react";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { designerContext } from "../../designer/contexts/Contexts.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import SaveIcon from "@mui/icons-material/Save";
export default function TopAppBar() {
  const context = useContext(designerContext);
  function handleSave() {
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(
        JSON.stringify(
          {
            nodes: context.nodes,
            edges: context.edges,
            nodesData: context.nodesData,
          },
          null,
          2,
        ),
      );
    let dlAnchorElem = document.getElementById("downloadFlowJson");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `flow-${context.nodes[0].id}.json`);
    dlAnchorElem.click();
  }
  return (
    <AppBar position={"fixed"}>
      <Toolbar>
        <Stack
          direction={"row"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} width={"100%"} gap={5}>
            <IconButton
              color="inherit"
              onClick={() => {
                context.setOpenNodesDrawer(!context.openNodesDrawer);
              }}
            >
              {context.openNodesDrawer ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant={"h6"}>{context.topAppBarTitle}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton color="inherit" onClick={handleSave}>
              <SaveIcon />
            </IconButton>
            <a id="downloadFlowJson" style={{ display: "none" }}></a>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

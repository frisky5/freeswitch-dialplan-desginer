import { useContext } from "react";
import { designerContext } from "../../designer/contexts/Contexts.js";
import { IconButton, Paper, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NodesDrawerItem from "./NodesDrawerItem.jsx";
import { NODE_TYPES } from "../../../helpers/nodeGenerator.js";

const drawerWidth = 180;
const closedDrawerWidth = 80;

function NodesDrawer(props) {
  const context = useContext(designerContext);

  return (
    <Paper
      variant="outlined"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: context.openNodesDrawer ? drawerWidth : closedDrawerWidth,
        "& .MuiDrawer-paper": {
          width: context.openNodesDrawer ? drawerWidth : closedDrawerWidth,
        },
        transition: "all 0.1s",
        height: "100%",
      }}
    >
      <Stack width={"100%"} height={"100%"}>
        <Stack
          pt={10}
          height={"100%"}
          width={"100%"}
          overflow={"auto"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          {props.type === "context-designer" && (
            <NodesDrawerItem
              name={"Logic Group"}
              type={NODE_TYPES.EXTENSION}
              tiny={!context.openNodesDrawer}
              onAdd={props.onAdd}
            />
          )}
          {props.type === "extension-designer" && (
            <NodesDrawerItem
              name={"Condition"}
              type={NODE_TYPES.CONDITION}
              tiny={!context.openNodesDrawer}
              onAdd={props.onAdd}
            />
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default NodesDrawer;

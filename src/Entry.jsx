import ContextDesigner from "./components/designer/ContextDesigner.jsx";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { designerContext } from "./components/designer/contexts/Contexts.js";
import ExtensionDesigner from "./components/designer/ExtensionDesigner.jsx";
import NodesDrawer from "./components/common/nodesDrawer/NodesDrawer.jsx";

export default function Entry() {
  const context = useContext(designerContext);
  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      {context.openExtensionDesigner ? (
        <ExtensionDesigner />
      ) : (
        <ContextDesigner />
      )}
    </Stack>
  );
}

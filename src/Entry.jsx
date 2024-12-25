import Designer from "./components/designer/Designer.jsx";
import { useMemo, useState } from "react";
import Drawer from "./components/common/Drawer.jsx";
import DesignerContext from "./contexts/designer.js";

import Genesis from "./components/ndoes/Genesis.jsx";
import CollectInput from "./components/ndoes/CollectInput.jsx";
import { generateCondition, genGenesis } from "./helpers/nodeGenerator.js";
import { Box } from "@mui/material";

function Entry(props) {
  const [nodes, setNodes] = useState([genGenesis(), generateCondition()]);
  const [edges, setEdges] = useState([]);
  const nodeTypes = useMemo(
    () => ({ genesis: Genesis, collectInput: CollectInput }),
    [],
  );
  const [viewport, setViewport] = useState({});

  return (
    <DesignerContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        nodeTypes,
        viewport,
        setViewport,
      }}
    >
      <Box id={"entry"} width={"100%"} height={"100%"}>
        {/*<Drawer />*/}
        <Designer />
      </Box>
    </DesignerContext.Provider>
  );
}

export default Entry;

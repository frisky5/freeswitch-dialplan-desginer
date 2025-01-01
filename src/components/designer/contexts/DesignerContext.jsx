import { useEffect, useState } from "react";
import { generateGenesis } from "../../../helpers/nodeGenerator.js";
import { designerContext } from "./Contexts.js";
import { produce } from "immer";
import { useEdgesState, useNodesState } from "@xyflow/react";

export default function DesignerContext({ children }) {
  const [nodes, setNodes] = useNodesState([]);
  const [swappedNodes, setSwappedNodes] = useState([]);
  const [edges, setEdges] = useEdgesState([]);
  const [swappedEdges, setSwappedEdges] = useState([]);
  const [nodesData, setNodesData] = useState({});
  const [swappedNodesData, setSwappedNodesData] = useState({});
  const [viewport, setViewport] = useState({ zoom: 1, x: 0, y: 0 });
  const [nodeOptionsDialogTarget, setNodeOptionsDialogTarget] = useState(null);
  const [openNodeOptionsDialog, setOpenNodeOptionsDialog] = useState(false);
  const [openNodesDrawer, setOpenNodesDrawer] = useState(false);
  const [extensionDesignerTarget, setExtensionDesignerTarget] = useState(false);
  const [openExtensionDesigner, setOpenExtensionDesigner] = useState(false);

  useEffect(() => {
    const [genesisNode, genesisNodeData] = generateGenesis();
    setNodes(
      produce((draft) => {
        draft.push(genesisNode);
      }),
    );
    setNodesData(
      produce((draft) => {
        draft[genesisNode.id] = genesisNodeData;
      }),
    );
  }, []);

  return (
    <designerContext.Provider
      value={{
        nodes,
        setNodes,
        swappedNodes,
        setSwappedNodes,
        edges,
        setEdges,
        swappedEdges,
        setSwappedEdges,
        viewport,
        setViewport,
        nodeOptionsDialogTarget,
        setNodeOptionsDialogTarget,
        openNodeOptionsDialog,
        setOpenNodeOptionsDialog,
        nodesData,
        setNodesData,
        swappedNodesData,
        setSwappedNodesData,
        openNodesDrawer,
        setOpenNodesDrawer,
        extensionDesignerTarget,
        setExtensionDesignerTarget,
        openExtensionDesigner,
        setOpenExtensionDesigner,
      }}
    >
      {children}
    </designerContext.Provider>
  );
}

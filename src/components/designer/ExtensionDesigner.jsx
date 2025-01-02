import {
  addEdge,
  applyEdgeChanges,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useContext, useState } from "react";

import {
  DESIGNER_NODE_TYPES,
  generateCondition,
  NODE_TYPES,
} from "../../helpers/nodeGenerator.js";
import { v7 } from "uuid";
import NodesDrawer from "../common/nodesDrawer/NodesDrawer.jsx";
import { produce } from "immer";
import { designerContext } from "./contexts/Contexts.js";
import { Button, Stack } from "@mui/material";

export default function ExtensionDesigner() {
  const context = useContext(designerContext);

  const [nodes, setNodes, onNodesChange] = useNodesState(
    context.nodesData[context.extensionDesignerTarget.id].nodes,
  );
  const [edges, setEdges] = useState(
    context.nodesData[context.extensionDesignerTarget.id].edges,
  );
  const [viewport, setViewport] = useState(
    context.nodesData[context.extensionDesignerTarget.id].viewport,
  );
  const [nodesData, setNodesData] = useState(
    context.nodesData[context.extensionDesignerTarget.id].nodesData,
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
    },
    [setEdges],
  );

  const onConnect = useCallback(
    (connection) => {
      connection.id = v7();
      connection.type = "smoothstep";
      setEdges((oldEdges) => addEdge(connection, oldEdges));
    },
    [setEdges],
  );

  const onViewportChange = useCallback(
    (viewport) => {
      setViewport(viewport);
    },
    [setViewport],
  );

  function oneNodeAdd(type) {
    switch (type) {
      case NODE_TYPES.CONDITION: {
        const [node, nodeData] = generateCondition();
        setNodes(
          produce((draft) => {
            draft.push(node);
          }),
        );
        setNodesData(
          produce((draft) => {
            draft[node.id] = nodeData;
          }),
        );
        return;
      }
    }
  }

  return (
    <Stack direction={"column"} width={"100%"} height={"100%"}>
      <Stack direction={"row"} width={"100%"} height={"100%"}>
        <NodesDrawer type={"extension-designer"} onAdd={oneNodeAdd} />
        <ReactFlowProvider>
          <ReactFlow
            nodeTypes={DESIGNER_NODE_TYPES}
            elementsSelectable={true}
            nodes={nodes}
            edges={edges}
            viewport={viewport}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onViewportChange={onViewportChange}
            fitView
          />
        </ReactFlowProvider>
      </Stack>
      {/*<Stack*/}
      {/*  width={"100%"}*/}
      {/*  direction={"row"}*/}
      {/*  alignItems={"flex-end"}*/}
      {/*  justifyContent={"flex-end"}*/}
      {/*  gap={2}*/}
      {/*>*/}
      {/*  <Button*/}
      {/*    size={"small"}*/}
      {/*    variant={"contained"}*/}
      {/*    color={"warning"}*/}
      {/*    onClick={() => {*/}
      {/*      context.setOpenExtensionDesigner(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    cancel*/}
      {/*  </Button>*/}
      {/*  <Button*/}
      {/*    size={"small"}*/}
      {/*    variant={"contained"}*/}
      {/*    color={"success"}*/}
      {/*    onClick={() => {*/}
      {/*      context.setOpenExtensionDesigner(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    save*/}
      {/*  </Button>*/}
      {/*</Stack>*/}
    </Stack>
  );
}

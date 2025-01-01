import { useCallback, useContext, useState } from "react";
import { designerContext } from "../contexts/Contexts.js";
import { Stack } from "@mui/material";
import NodesDrawer from "../../common/nodesDrawer/NodesDrawer.jsx";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import {
  DESIGNER_NODE_TYPES,
  generateCondition,
  NODE_TYPES,
} from "../../../helpers/nodeGenerator.js";
import { v7 } from "uuid";
import { produce } from "immer";

export default function ExtensionNodeOptions(props) {
  const context = useContext(designerContext);

  const [nodes, setNodes] = useState(
    context.nodesData[context.nodeOptionsDialogTarget.id].nodes,
  );
  const [edges, setEdges] = useState(
    context.nodesData[context.nodeOptionsDialogTarget.id].edges,
  );
  const [viewport, setViewport] = useState(
    context.nodesData[context.nodeOptionsDialogTarget.id].viewport,
  );
  const [nodesData, setNodesData] = useState({});

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((oldNodes) => applyNodeChanges(changes, oldNodes));
    },
    [setNodes],
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
    <Stack width="100%" height="100%" direction={"row"} zIndex={100000}>
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
        />
      </ReactFlowProvider>
    </Stack>
  );
}

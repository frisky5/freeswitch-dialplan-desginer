import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useContext } from "react";

import {
  DESIGNER_NODE_TYPES,
  generateExtension,
  NODE_TYPES,
} from "../../helpers/nodeGenerator.js";
import { v7 } from "uuid";
import NodesDrawer from "../common/nodesDrawer/NodesDrawer.jsx";
import NodeOptionsDialog from "./dialogs/NodeOptionsDialog.jsx";
import { produce } from "immer";
import { designerContext } from "./contexts/Contexts.js";

export default function ContextDesigner() {
  const context = useContext(designerContext);

  const onNodesChange = useCallback(
    (changes) => {
      context.setNodes((oldNodes) => applyNodeChanges(changes, oldNodes));
    },
    [context.setNodes],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      context.setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
    },
    [context.setEdges],
  );

  const onConnect = useCallback(
    (connection) => {
      connection.id = v7();
      connection.type = "smoothstep";
      context.setEdges((oldEdges) => addEdge(connection, oldEdges));
    },
    [context.setEdges],
  );

  const onViewportChange = useCallback(
    (viewport) => {
      context.setViewport(viewport);
    },
    [context.setViewport],
  );

  function oneNodeAdd(type) {
    switch (type) {
      case NODE_TYPES.EXTENSION:
        const [extensionNode, extensionNodeData] = generateExtension();
        context.setNodes(
          produce((draft) => {
            draft.push(extensionNode);
          }),
        );
        context.setNodesData(
          produce((draft) => {
            draft[extensionNode.id] = extensionNodeData;
          }),
        );
        return;
    }
  }

  return (
    <>
      <NodesDrawer type={"context-designer"} onAdd={oneNodeAdd} />
      <ReactFlowProvider>
        <ReactFlow
          elementsSelectable={true}
          nodeTypes={DESIGNER_NODE_TYPES}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onViewportChange={onViewportChange}
          fitView
          fitViewOptions={{ maxZoom: 1 }}
          nodes={context.nodes}
          edges={context.edges}
          viewport={context.viewport}
        />
      </ReactFlowProvider>
      <NodeOptionsDialog />
    </>
  );
}

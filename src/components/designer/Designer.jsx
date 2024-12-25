import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useContext } from "react";

import DesignerContext from "../../contexts/designer.js";
import { NODE_TYPES } from "../../helpers/nodeGenerator.js";
import { v7 } from "uuid";

function Designer() {
  const context = useContext(DesignerContext);

  const onNodesChange = useCallback(
    (changes) => {
      context.setNodes((oldNodes) => applyNodeChanges(changes, oldNodes));
    },
    [context],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      context.setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
    },
    [context],
  );

  const onConnect = useCallback(
    (connection) => {
      connection.id = v7();
      connection.type = "smoothstep";
      context.setEdges((oldEdges) => addEdge(connection, oldEdges));
    },
    [context],
  );

  const onViewportChange = useCallback(
    (viewport) => {
      context.setViewport(viewport);
    },
    [context],
  );

  const onNodeClick = useCallback(
    (node) => {
      console.log(node);
    },
    [context],
  );

  return (
    <ReactFlow
      elementsSelectable={true}
      nodeTypes={NODE_TYPES}
      nodes={context.nodes}
      edges={context.edges}
      onNodesChange={onNodesChange}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onViewportChange={onViewportChange}
      fitView
    />
  );
}

export default Designer;

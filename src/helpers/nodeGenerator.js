import { v7 } from "uuid";
import CollectInput from "src/components/designer/nodes/CollectInput.jsx";
import Genesis from "../components/designer/nodes/Genesis.jsx";
import Condition from "../components/designer/nodes/Condition.jsx";
import Extension from "../components/designer/nodes/Extension.jsx";
import ExtensionGenesis from "../components/designer/nodes/ExtensionGenesis.jsx";

export const NODE_TYPES = Object.freeze({
  GENESIS: "GENESIS",
  EXTENSION_GENESIS: "EXTENSION_GENESIS",
  EXTENSION: "EXTENSION",
  COLLECT_INPUT: "COLLECT_INPUT",
  CONDITION: "CONDITION",
});

export const DESIGNER_NODE_TYPES = Object.freeze({
  GENESIS: Genesis,
  EXTENSION_GENESIS: ExtensionGenesis,
  EXTENSION: Extension,
  COLLECT_INPUT: CollectInput,
  CONDITION: Condition,
});

export const NODE_NAME_BY_TYPE = new Map([
  [NODE_TYPES.GENESIS, "Start"],
  [NODE_TYPES.EXTENSION_GENESIS, "Start"],
  [NODE_TYPES.EXTENSION, "Logic Group"],
  [NODE_TYPES.COLLECT_INPUT, "Collect Input"],
  [NODE_TYPES.CONDITION, "Condition"],
]);

export function generateGenesis() {
  let node = generateTemplate();
  node.type = NODE_TYPES.GENESIS;
  node.data.outputHandles.push({ id: v7() });
  node.data.inputHandles = [];
  node.draggable = false;
  node.position = { x: 0, y: 0 };

  let nodeData = { name: "" };
  return [node, nodeData];
}

export function generateExtensionGenesis() {
  let node = generateTemplate();
  node.type = NODE_TYPES.EXTENSION_GENESIS;
  node.data.outputHandles.push({ id: v7() });
  node.data.inputHandles = [];
  node.draggable = false;
  node.position = { x: 0, y: 0 };

  let nodeData = {};
  return [node, nodeData];
}

export function generateExtension() {
  let node = generateTemplate();
  node.type = NODE_TYPES.EXTENSION;
  node.data.inputHandles.push({ id: v7() });
  node.data.outputHandles.push({ id: v7() });

  let [tempGenesis, tempGenesisData] = generateExtensionGenesis();
  let nodeData = {
    name: "",
    nodes: [],
    edges: [],
    viewport: {},
    nodesData: {},
  };
  nodeData.nodes.push(tempGenesis);
  nodeData.nodesData[tempGenesis.id] = tempGenesisData;
  return [node, nodeData];
}

export function generateCondition() {
  let node = generateTemplate();
  node.type = NODE_TYPES.CONDITION;
  node.data.inputHandles.push({ id: v7() });
  let nodeData = { conditions: [] };
  return [node, nodeData];
}

function generateTemplate() {
  return {
    id: v7(),
    position: { x: 0, y: 0 },
    data: {
      inputHandles: [],
      outputHandles: [],
    },
    dragHandle: ".drag-handle__mover",
    selectable: true,
    draggable: true,
    connectable: true,
  };
}

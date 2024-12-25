import { v7 } from "uuid";
import CollectInput from "src/components/ndoes/CollectInput.jsx";
import Genesis from "../components/ndoes/Genesis.jsx";
import Condition from "../components/ndoes/Condition.jsx";

export const NODE_TYPES = Object.freeze({
  GENESIS: Genesis,
  COLLECT_INPUT: CollectInput,
  CONDITION: Condition,
});

export const NODE_TYPES_KEYS = Object.freeze({
  GENESIS: "GENESIS",
  COLLECT_INPUT: "COLLECT_INPUT",
  CONDITION: "CONDITION",
});

export function genGenesis() {
  let node = generateTemplate();
  node.type = NODE_TYPES_KEYS.GENESIS;
  node.data.outputHandles.push({ id: v7() });
  node.draggable = false;
  return node;
}

export function generateCondition() {
  let node = generateTemplate();
  node.type = NODE_TYPES_KEYS.CONDITION;
  node.data.inputHandles.push({ id: v7() });
  return node;
}

function generateTemplate() {
  return {
    id: v7(),
    position: { x: 0, y: 0 },
    data: {
      inputHandles: [],
      outputHandles: [],
    },
    selectable: true,
    draggable: true,
    connectable: true,
  };
}

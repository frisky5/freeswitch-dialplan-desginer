import { Handle, Position } from "@xyflow/react";

export default function SourceHandle({ id }) {
  return (
    <Handle
      id={id}
      key={id}
      type={"source"}
      position={Position.Right}
      style={{
        position: "relative",
        top: "auto",
        height: 8,
        width: 8,
        transform: `translate(50%,0)`,
      }}
    />
  );
}

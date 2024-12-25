import { Handle, Position } from "@xyflow/react";

export default function TargetHandle({ id }) {
  return (
    <Handle
      id={id}
      key={id}
      type={"target"}
      position={Position.Left}
      style={{
        position: "relative",
        top: "auto",
        height: 8,
        width: 8,
        transform: `translate(-50%,0)`,
      }}
    />
  );
}

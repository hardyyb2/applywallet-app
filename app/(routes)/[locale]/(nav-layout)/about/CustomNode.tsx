import React, { memo } from "react";

import { Handle, Position } from "reactflow";

const CustomNode = memo(({ data, isConnectable }: any) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        <strong>{data.name}</strong>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});

CustomNode.displayName = "CustomNode";

export { CustomNode };

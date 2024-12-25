import menu_icon from "src/assets/menu-icon.svg";
import arrow_back from "src/assets/arrow-back.svg";
import { useContext, useState } from "react";
import DesignerContext from "../../contexts/designer.js";
import {
  generateCondition,
  NODE_TYPES_KEYS,
} from "../../helpers/nodeGenerator.js";

function Drawer() {
  const [open, setOpen] = useState(false);
  const designerContext = useContext(DesignerContext);

  return (
    <div
      id={"nodes-drawer"}
      className={`fixed top-0 left-0 z-10 h-screen overflow-y-auto ${open ? "w-60" : "w-10"} bg-gray-500 dark:bg-node-dark flex flex-col gap-1 pt-1 transition-all`}
    >
      <div className={"p-1 pl-2"}>
        <button onClick={() => setOpen(!open)}>
          <img src={open ? arrow_back : menu_icon} alt="menu-icon" />
        </button>
      </div>
      <div
        className={
          "flex justify-center items-center overflow-y-auto cursor-pointer overflow-x-hidden pr-2 pl-2"
        }
      >
        <div
          className={`${open ? "relative" : "hidden"} border border-amber-200 rounded-md w-full`}
          onClick={() => {
            designerContext.setNodes((oldNodes) => [
              ...oldNodes,
              generateCondition(
                NODE_TYPES_KEYS.COLLECT_INPUT,
                (designerContext.viewport.x * -1) /
                  (designerContext.viewport.zoom * 2),
                (designerContext.viewport.y * -1) /
                  (designerContext.viewport.zoom * 2),
              ),
            ]);
          }}
        >
          <p>Condition</p>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

import { themeAtom } from "@/state/themeAtom";
import { useAtom } from "jotai";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { toolAtom } from "@/state/toolAtom";
import { HandTool } from "./tools/hand";
import { LineTool } from "./tools/line";
import { RhombusTool } from "./tools/rhombus";
import { SquareTool } from "./tools/square";
import { CircleTool } from "./tools/circle";
import { ArrowTool } from "./tools/arrow";
import { EraserTool } from "./tools/eraser";
import { LockTool } from "./tools/lock";
import { ListTool } from "./tools/list";
import { TextTool } from "./tools/text";

const themes = {
  Dark: "bg-gray-950 cursor-pointer hover:text-white hover:bg-gray-950",
  Bright: "bg-white cursor-pointer",
  Tool: "bg-purple-700 text-white cursor-pointer hover:bg-purple-800",
};

export function Canvastab() {
  const [theme] = useAtom(themeAtom);
  const [tool, setTool] = useAtom(toolAtom);

  return (
    <ButtonGroup className="">
      <Button
        onClick={() => {setTool("hand")}}
        className={tool == "hand" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <HandTool />
      </Button>
      <Button
        onClick={() => {setTool("rhombus")}}
        className={tool == "rhombus" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <RhombusTool />
      </Button>
      <Button
        className={tool == "line" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <LineTool />
      </Button>
      <Button
        className={tool == "square" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <SquareTool />
      </Button>
      <Button
        className={tool == "circle" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <CircleTool />
      </Button>
      <Button
        className={tool == "arrow" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <ArrowTool />
      </Button>
      <Button
        className={tool == "erasure" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <EraserTool />
      </Button>
       <Button
        className={tool == "text" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <TextTool />
      </Button>

      <Button
        className={tool == "lock" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <LockTool />
      </Button>
      <Button
        className={tool == "file" ? themes["Tool"] : themes[theme]}
        variant="ghost"
      >
        <ListTool />
      </Button>
    </ButtonGroup>
  );
}

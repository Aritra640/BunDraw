import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Circle } from 'lucide-react';

export function CircleTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("circle");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Circle />
    </Button>
  );
}



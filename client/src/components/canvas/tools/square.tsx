import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Square } from 'lucide-react'

export function SquareTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("square");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Square />
    </Button>
  );
}


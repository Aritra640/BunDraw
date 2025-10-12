
import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Eraser } from 'lucide-react';

export function EraserTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("erasure");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Eraser />
    </Button>
  );
}



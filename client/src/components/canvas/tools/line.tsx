import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Minus } from 'lucide-react';

export function LineTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("line");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Minus />
    </Button>
  );
}


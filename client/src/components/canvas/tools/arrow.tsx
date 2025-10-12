
import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { MoveUpRight } from 'lucide-react';


export function ArrowTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("arrow");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <MoveUpRight />
    </Button>
  );
}


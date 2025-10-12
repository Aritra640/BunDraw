import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Hand } from "lucide-react";


export function HandTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("hand");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Hand />
    </Button>
  );
}


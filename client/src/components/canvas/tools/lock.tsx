import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Lock } from 'lucide-react';

export function LockTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("lock");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Lock />
    </Button>
  );
}



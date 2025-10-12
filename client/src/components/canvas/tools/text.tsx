import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { TypeOutline } from 'lucide-react';

export function TextTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("text");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <TypeOutline />
    </Button>
  );
}




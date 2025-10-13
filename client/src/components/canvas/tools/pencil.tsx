import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Square } from 'lucide-react'
import { Pencil } from 'lucide-react';

export function PencilTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("pencil");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Pencil />
    </Button>
  );
}



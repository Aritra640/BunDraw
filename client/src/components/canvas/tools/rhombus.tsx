import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { Diamond } from "lucide-react";

export function RhombusTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("rhombus");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <Diamond />
    </Button>
  );
}

import { Button } from "@/components/ui/button";
import { toolAtom } from "@/state/toolAtom";
import { useAtom } from "jotai";
import { NotebookTabs } from 'lucide-react';

export function ListTool() {
  const [tool, setTool] = useAtom(toolAtom);
  console.log(tool);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTool("file");
      }}
      className="cursor-pointer hover:bg-purple-400 hover:text-white"
    >
      <NotebookTabs />
    </Button>
  );
}

import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { currentProjectAtom } from "@/state/currentProjectAtom";

export function Projectnametab() {
  const [project_name] = useAtom(currentProjectAtom);

  return (
    <Button variant="secondary" className="cursor-pointer ">
      {project_name}
    </Button>
  );
}

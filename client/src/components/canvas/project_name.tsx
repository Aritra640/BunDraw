import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { currentProjectAtom } from "@/state/currentProjectAtom";
import { projectnameModalAtom } from "@/state/modal_state/projectnameModalAtom";

export function Projectnametab() {
  const [project_name] = useAtom(currentProjectAtom);
  const [modal, setModal] = useAtom(projectnameModalAtom);

  console.log(modal);

  return (
    <Button onClick={() => {setModal(true)}} variant="secondary" className="cursor-pointer ">
      {project_name}
    </Button>
  );
}

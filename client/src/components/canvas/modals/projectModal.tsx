import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currentProjectAtom } from "@/state/currentProjectAtom";
import { useAtom } from "jotai";
import { useRef } from "react";
import { projectnameModalAtom } from "@/state/modal_state/projectnameModalAtom";

export function ProjectNameModal() {
  const [curproject, setProjectName] = useAtom(currentProjectAtom);
  const [modal, setModal] = useAtom(projectnameModalAtom);
  const projectref = useRef<HTMLInputElement>(null);

  if (modal == false) {
    return <></>;
  }

  function togglemodal() {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  function onclick() {
    if (!projectref.current) {
      togglemodal();
      return;
    }

    setProjectName(projectref.current.value);
    togglemodal();
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Choose Your Project name</CardTitle>
        <CardDescription>Enter your project name</CardDescription>

        <CardAction>
          <Button className="cursor-pointer" onClick={togglemodal} variant="ghost">
            <X />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Project name</Label>
              <Input
                ref={projectref}
                id="email"
                type="email"
                placeholder={curproject}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full bg-purple-700 cursor-pointer hover:bg-purple-600"
          onClick={onclick}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

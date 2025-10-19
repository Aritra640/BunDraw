import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { collaboratestringAtom } from "@/state/collaboratestringAtom";
import { collabModalAtom } from "@/state/modal_state/collabModalAtom";
import { useAtom } from "jotai";
import { X } from "lucide-react";

export function CollabModal() {
  const [modal, setModal] = useAtom(collabModalAtom);
  const [collabString] = useAtom(collaboratestringAtom);

  if (!modal) return null;

  return (
    <Card className="w-full max-w-sm relative">
      <Button
        onClick={() => setModal(false)}
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2"
      >
        <X />
      </Button>

      <CardHeader>
        <CardTitle>Start collaborating with others</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap items-center gap-2">
            <span>Add others and collaborate together. Share this</span>
            <h1 className="font-mono text-sm bg-muted px-2 py-1 rounded">
              {collabString}
            </h1>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>{/* Add form fields or inputs here */}</CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full bg-purple-700 cursor-pointer hover:bg-purple-600">Collaborate</Button>
      </CardFooter>
    </Card>
  );
}


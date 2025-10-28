import { authmodalAtom } from "@/state/modal_state/authmodalAtom";
import { useAtom } from "jotai";
import { Card, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function AuthModal() {
  const [modal, setModal] = useAtom(authmodalAtom);
  console.log(modal);
  if (modal == false) return <> </>;

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

      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full bg-purple-700 cursor-pointer hover:bg-purple-600">
          Continue with google
        </Button>
      </CardFooter>
    </Card>
  );
}

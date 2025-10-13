import { List } from "lucide-react";
import { Button } from "../ui/button";

export function MobileFileButton() {
  return (
    <Button
      variant="ghost"
      className="cursor-pointer text-white bg-purple-700 hover:bg-purple-600 hover:text-white"
    >
      <List />
    </Button>
  );
}

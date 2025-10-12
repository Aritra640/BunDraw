import { Waypoints } from 'lucide-react';
import { Button } from "../ui/button";

export function CollabButton() {


  return (
    <Button
      variant="ghost"
      className="cursor-pointer text-white bg-purple-700 hover:bg-purple-600 hover:text-white"
    >
      <Waypoints />
    </Button>
  );
}


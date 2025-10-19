import { Waypoints } from 'lucide-react';
import { Button } from "../ui/button";
import { collabModalAtom } from '@/state/modal_state/collabModalAtom';
import { useAtom } from 'jotai';

export function CollabButton() {
  const [modal, setModal] = useAtom(collabModalAtom);
  console.log(modal);

  return (
    <Button
      variant="ghost"
      onClick={() => setModal(true)}
      className="cursor-pointer text-white bg-purple-700 hover:bg-purple-600 hover:text-white"
    >
      <Waypoints />
    </Button>
  );
}


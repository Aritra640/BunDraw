import { authmodalAtom } from "@/state/modal_state/authmodalAtom";
import { useAtom } from "jotai";

export function AuthModal() {
  const [modal, setModal] = useAtom(authmodalAtom);
  console.log(modal);
  if (modal == false) return <> </>;

  return (
  );
}

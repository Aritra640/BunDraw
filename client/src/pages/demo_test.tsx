import { AuthModal } from "@/components/authentication/authmodal";
import { authmodalAtom } from "@/state/modal_state/authmodalAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function DemoTest() {
  const [, setAuth] = useAtom(authmodalAtom);

  useEffect(() => {
    setAuth({ state: true, status: "signin"});
  });

  return (
    <div>
      <AuthModal />
    </div>
  );
}

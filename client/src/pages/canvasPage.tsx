import { Topbar } from "@/components/canvas/components/topbar";
import { CollabModal } from "@/components/canvas/modals/collabModal";
import { ProjectNameModal } from "@/components/canvas/modals/projectModal";
import { themeAtom } from "@/state/themeAtom";
import { useAtom } from "jotai";

const themes = {
  Dark: "bg-gray-950/90 text-white",
  Bright: "bg-slate-200 text-black",
};

export function CanvasPage() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={"h-screen w-screen " + themes[theme]}>
      <Topbar />
      <div className="pl-3 pt-2"><ProjectNameModal /></div>
      <div className="flex justify-center items-center pt-28"><CollabModal /></div>
    </div>
  );
}

import { Topbar } from "@/components/canvas/components/topbar";
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
    </div>
  );
}

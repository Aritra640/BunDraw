import { Canvastab } from "@/components/canvas/canvastab";
import { themeAtom } from "@/state/themeAtom";
import { useAtom } from "jotai";

const themes = {
  Dark: "bg-black text-white",
  Bright: "bg-slate-100 text-black",
};

export function CanvasPage() {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={"h-screen w-screen " + themes[theme]}>
      <div className="flex justify-center pt-2">
        <Canvastab />
      </div>
    </div>
  );
}

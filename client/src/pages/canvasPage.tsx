import { Canvastab } from "@/components/canvas/canvastab";
import { Projectnametab } from "@/components/canvas/project_name";
import { ThemeButton } from "@/components/global/themeButton";
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
      <div className="flex justify-around pt-2">
        <Projectnametab />
        <Canvastab />

        <ThemeButton />
      </div>
    </div>
  );
}

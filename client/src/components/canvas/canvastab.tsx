import { themeAtom } from "@/state/themeAtom";
import { useAtom } from "jotai";

const themes = {
  Dark: "bg-slate-700",
  Bright: "bg-slate-200",
};

export function Canvastab() {
  const [theme] = useAtom(themeAtom);
  return (
    <div className={themes[theme] + " cursor-pointer rounded-xl p-2"}>
      this is the canvas tab
    </div>
  );
}

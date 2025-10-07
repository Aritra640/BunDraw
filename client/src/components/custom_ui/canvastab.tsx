import { themeAtom } from "@/state/themeAtom";
import { useAtom } from "jotai";

const themes = {
  Dark: "bg-slate-800 hover:bg-slate-900",
  Bright: "bg-white",
};

export function Canvastab() {
  const [theme] = useAtom(themeAtom);

  return <div className={"rounded-2xl cursor-pointer " + themes[theme]}> 
    this is the cursor tab
  </div>;
}

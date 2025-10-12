import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { SunMoon } from "lucide-react";
import { themeAtom } from "@/state/themeAtom";

export function ThemeButton() {

  const [theme, setTheme] = useAtom(themeAtom);

  function onclick() {
    if (theme == "Dark") setTheme("Bright");
    else setTheme("Dark");
  }

  return (
    <Button
      variant="ghost"
      className="cursor-pointer text-white bg-purple-700 hover:bg-purple-600 hover:text-white"
      onClick={onclick}
    >
      <SunMoon />
    </Button>
  );
}

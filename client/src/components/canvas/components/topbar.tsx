import { FileButton } from "@/components/global/fileButton";
import { Projectnametab } from "../project_name";
import { Canvastab } from "../canvastab";
import { ThemeButton } from "@/components/global/themeButton";
import { MobileFileButton } from "@/components/global/mobileFileButton";
import CollaborateModalIcon from "../modals/collabModal";

export function Topbar() {
  return (
    <>
      <div className="flex justify-start pl-4 pt-1 md:hidden">
        <MobileFileButton />
      </div>

      <div className="hidden md:flex justify-around pt-2">
        <span className="flex gap-2">
          <FileButton />
          <Projectnametab />
        </span>

        <Canvastab />

        <span className="flex gap-2">
          <ThemeButton />
          <CollaborateModalIcon />
        </span>
      </div>
    </>
  );
}


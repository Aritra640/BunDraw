import authstate from "@/types/authstate";
import { atom } from "jotai";

export const authmodalAtom = atom<authstate>({
  status: "signin",
  state: false,
});

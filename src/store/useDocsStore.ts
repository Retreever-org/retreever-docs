import { create } from "zustand";

interface DocsState {
  current: string;
  setCurrent: (name: string) => void;
}

export const useDocsStore = create<DocsState>((set) => ({
  current: "",
  setCurrent: (name) => set({ current: name }),
}));

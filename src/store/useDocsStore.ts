import { create } from "zustand";
import { getMarkdown } from "../dashboard/service/DocSearch";

export interface ViewingDoc {
  markdown: string | null;
  path: string | null;
}

interface DocsState {
  current: ViewingDoc;
  setCurrent: (path: string) => Promise<void>; // async now
}

export const useDocsStore = create<DocsState>((set) => ({
  current: {
    markdown: null,
    path: null,
  },
  setCurrent: async (path: string) => {
    const markdown = await getMarkdown(path);
    set({
      current: {
        markdown,
        path,
      },
    });
  },
}));

type LayoutState = {
  sidebarWidth: number;
  setSidebarWidth: (width: number) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  sidebarWidth: 0,
  setSidebarWidth: (width) => set({ sidebarWidth: width }),
}));

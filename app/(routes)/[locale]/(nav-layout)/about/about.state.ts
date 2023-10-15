import { create } from "zustand";

type State = {
  inViewItemId: string | null;
};

type Action = {
  setInViewItemId: (itemId: State["inViewItemId"]) => void;
};

const useAboutStore = create<State & Action>((set) => ({
  inViewItemId: "",
  setInViewItemId: (inViewItemId) => set(() => ({ inViewItemId })),
}));

export { useAboutStore };

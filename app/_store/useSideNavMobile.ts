import { create } from "zustand";

type State = {
  sideNavMobileOpen: boolean;
};

type Action = {
  setSideNavMobileOpen: (sideNavMobileOpen: State["sideNavMobileOpen"]) => void;
  toggleSideNavMobileOpen: () => void;
};

const useSideNavMobileStore = create<State & Action>((set) => ({
  sideNavMobileOpen: false,
  setSideNavMobileOpen: (sideNavMobileOpen) =>
    set(() => ({ sideNavMobileOpen })),
  toggleSideNavMobileOpen: () =>
    set((state) => ({ sideNavMobileOpen: !state.sideNavMobileOpen })),
}));

export { useSideNavMobileStore };

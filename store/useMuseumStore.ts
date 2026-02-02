
import { create } from 'zustand'

interface MuseumStore {
  currentSpace: number;
  readingProgress: number;
  isDrawerOpen: boolean;
  activeDrawerContent: string | null;
  setSpace: (spaceId: number) => void;
  setDrawer: (isOpen: boolean, content?: string) => void;
}

export const useMuseumStore = create<MuseumStore>((set) => ({
  currentSpace: 1,
  readingProgress: 0,
  isDrawerOpen: false,
  activeDrawerContent: null,
  setSpace: (spaceId) => set({ currentSpace: spaceId }),
  setDrawer: (isOpen, content) => set({ isDrawerOpen: isOpen, activeDrawerContent: content || null }),
}))

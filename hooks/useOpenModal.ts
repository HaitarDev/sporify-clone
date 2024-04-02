import { create } from "zustand";

type OpenModalStore = {
  isOpen: boolean;
  toggle: () => void;
};

const useOpenModal = create<OpenModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useOpenModal;

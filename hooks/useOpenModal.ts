import { create } from "zustand";

type OpenModalStore = {
  isOpen: boolean;
  toggle: () => void;
  onClose: () => void;
};

const useOpenModal = create<OpenModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useOpenModal;

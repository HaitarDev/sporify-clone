"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useOpenModal from "@/hooks/useOpenModal";

interface ModalAuthProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}
export function ModalAuth({ children, description, title }: ModalAuthProps) {
  const { isOpen, toggle } = useOpenModal();

  console.log(isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="w-full h-full md:h-fit md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

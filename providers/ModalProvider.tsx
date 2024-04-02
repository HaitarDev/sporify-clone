"use client";

import { ModalAuth } from "@/components/modal-auth";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <ModalAuth description="asd" title="Welcome back">
      <div>children</div>
    </ModalAuth>
  );
}
export default ModalProvider;

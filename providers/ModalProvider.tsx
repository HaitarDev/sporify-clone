"use client";

import { ModalAuth } from "@/components/modal-auth";
import { useEffect, useState } from "react";

import SupabaseAuthForm from "@/components/supabase-auth-form";

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
      <SupabaseAuthForm />
    </ModalAuth>
  );
}
export default ModalProvider;

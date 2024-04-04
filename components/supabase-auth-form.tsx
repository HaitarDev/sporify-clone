"use client";

import useOpenModal from "@/hooks/useOpenModal";
import useIsUserLogging from "@/hooks/useSession";
import { createClient } from "@/utils/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SupabaseAuthForm() {
  const { toggle } = useOpenModal();
  const router = useRouter();
  const { user, setUser } = useIsUserLogging();

  const supabase = createClient();

  const session = user?.data.user;

  useEffect(() => {
    setUser();
  }, [setUser]);

  useEffect(() => {
    if (session) {
      toggle();
      router.refresh();
    }
  }, [toggle, router, session]);

  return (
    <Auth
      supabaseClient={supabase}
      providers={["github"]}
      magicLink
      theme="dark"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "#404040",
              brandAccent: "#22c55e",
            },
          },
        },
      }}
    />
  );
}
export default SupabaseAuthForm;

import { createClient } from "@/utils/supabase/client";
import { UserResponse } from "@supabase/supabase-js";
import { create } from "zustand";

interface StoreGetUser {
  user: UserResponse | null;
  setUser: () => void;
}

const useIsUserLogging = create<StoreGetUser>((set) => ({
  user: null,
  setUser: async () => {
    const supabase = createClient();
    const newUser = await supabase.auth.getUser();
    set({ user: newUser });
  },
}));

export default useIsUserLogging;

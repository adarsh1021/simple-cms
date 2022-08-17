import { useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

const Login = () => {
  const router = useRouter();
  const userContext = useUser();

  useEffect(() => {
    if (userContext.user) {
      router.push("/dashboard");
    }
  }, [userContext]);

  return (
    <Auth
      supabaseClient={supabase}
      providers={["google", "facebook", "github"]}
      socialLayout="horizontal"
      socialButtonSize="xlarge"
    />
  );
};

export default Login;

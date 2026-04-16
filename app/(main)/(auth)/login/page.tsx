'use client'
import React, { useEffect } from "react";
import { GoogleSignInButton } from "@/app/components/auth/GoogleSignInButton";

import { AuthLayout } from "@/app/components/auth/AuthLayout";
import { MobileBrandHeader } from "@/app/components/auth/MobileBrandHeader";
import { AuthFormHeader } from "@/app/components/auth/AuthFormHeader";
import { AuthDivider } from "@/app/components/auth/AuthDivider";
import { AuthFooter } from "@/app/components/auth/AuthFooter";
import { LonginForm } from "@/app/components/auth/LoginForm";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };



  return (
    <AuthLayout>
      <MobileBrandHeader />
      <AuthFormHeader
        title="Welcome Back to sanctuary"
        subtitle="Start your journey into the nocturnal atelier."
      />
      <GoogleSignInButton />
      <AuthDivider />
      <LonginForm email={email} password={password} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} />
      <AuthFooter
        promptText="No Account? Create One."
        linkText="Sign Up"
        linkHref="/signup"
      />
    </AuthLayout>
  );
};

export default LoginPage;

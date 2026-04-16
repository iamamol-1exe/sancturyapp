'use client'
import React, { useEffect } from "react";
import { AuthLayout } from "@/app/components/auth/AuthLayout";
import { MobileBrandHeader } from "@/app/components/auth/MobileBrandHeader";
import { AuthFormHeader } from "@/app/components/auth/AuthFormHeader";
import { GoogleSignInButton } from "@/app/components/auth/GoogleSignInButton";
import { AuthDivider } from "@/app/components/auth/AuthDivider";
import { SignupForm } from "@/app/components/auth/SignupForm";
import { AuthFooter } from "@/app/components/auth/AuthFooter";

const SignUpPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {

    setEmail(e.target.value);
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }



  return (
    <AuthLayout>
      <MobileBrandHeader />
      <AuthFormHeader
        title="Create your sanctuary"
        subtitle="Start your journey into the nocturnal atelier."
      />
      <GoogleSignInButton />
      <AuthDivider />
      <SignupForm name={name} email={email} password={password} onChangeName={onChangeName} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} />
      <AuthFooter
        promptText="Already a resident?"
        linkText="Log in"
        linkHref="/login"
      />
    </AuthLayout>
  );
};

export default SignUpPage;

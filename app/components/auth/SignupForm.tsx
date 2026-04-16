
import React from "react";
import { User, Mail, Lock } from "lucide-react";
import { AuthInput } from "./AuthInput";
import { Button } from "../buttons";

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const SignupForm = ({ name, email, password, onChangeName, onChangeEmail, onChangePassword }: SignupFormProps) => {
  return (
    <form className="space-y-6">
      <AuthInput
        id="name"
        value={name}
        onChange={onChangeName}
        label="Full Name"
        type="text"
        placeholder="Elias Thorne"
        icon={<User size={20} />}
      />
      <AuthInput
        value={email}
        onChange={onChangeEmail}
        id="email"
        label="Email Address"
        type="email"
        placeholder="elias@atelier.com"
        icon={<Mail size={20} />}
      />
      <AuthInput
        value={password}
        onChange={onChangePassword}
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••••••"
        icon={<Lock size={20} />}
      />
      <div className="pt-4">
        <Button label="Create Account" type="primary" />
      </div>
    </form>
  );
};


import { Mail, Lock } from "lucide-react"
import { Button } from "../buttons"
import { AuthInput } from "./AuthInput"


interface LoginFormProps {
    email: string;
    password: string;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LonginForm = ({ email, password, onChangeEmail, onChangePassword }: LoginFormProps) => {

    return <>
        <form className="space-y-6">
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
                <Button label="Log In" type="primary" />
            </div>

        </form>
    </>
}
import { TextInput } from "@/components/custom/CustomInputs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const LogInWithEmailAndPasswordForm = (p: {
  FeedbackComp: React.ReactNode;
  handleLogIn: (p: { email: string; password: string }) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-4">
      {p.FeedbackComp}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (isLoading) return;
          setIsLoading(true);

          await p.handleLogIn({ email, password });

          setIsLoading(false);
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <Label htmlFor="login-email-input">Email</Label>
          <TextInput
            id="login-email-input"
            value={email}
            onInput={(x) => setEmail(x)}
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <Label htmlFor="login-password-input">Password</Label>
          <TextInput
            id="login-password-input"
            value={password}
            onInput={setPassword}
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "logging in..." : "Log In"}
        </Button>
      </form>
    </div>
  );
};

import { useState } from "react";

const statusClassMap: Record<string, string> = {
  error: "bg-destructive/75",
  success: "bg-green-500/50",
};

export const FormFeedbackMessages = (p: { messages: string[]; status: "success" | "error" }) => {
  const [title, ...otherMessages] = p.messages;

  return (
    <div
      className={`mb-4 rounded-md p-3 text-center text-sm text-white ${statusClassMap[p.status] ?? ""}`}
    >
      <div className="text-lg font-bold">{title}</div>
      {otherMessages && otherMessages.map((message, i) => <div key={i}>{message}</div>)}
    </div>
  );
};

export const useFormFeedbackMessages = () => {
  const [statusAndMessages, setStatusAndMessages] = useState<{
    status: "error" | "success";
    messages: string[];
  } | null>(null);

  const showError = (messages: string[]) => {
    setStatusAndMessages({ status: "error", messages });
  };

  const showSuccess = (messages: string[]) => {
    setStatusAndMessages({ status: "success", messages });
  };
  const clear = () => {
    setStatusAndMessages(null);
  };

  const { status, messages } = statusAndMessages ?? {};

  return {
    messages,
    status,
    showError,
    showSuccess,
    clear,
  };
};

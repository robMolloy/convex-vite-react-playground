import React from "react";
import { Input } from "../ui/input";

type TInputParams = Parameters<typeof Input>[0];

export const TextInput = ({
  onInput,
  value,
  ...p
}: Omit<TInputParams, "type" | "onInput" | "onChange" | "value"> & {
  type?: "text" | "password" | "email";
  value: string;
  onInput: (x: string) => void;
}) => {
  return (
    <Input
      type={p.type ?? "text"}
      {...p}
      value={value}
      onChange={(e) => {
        const newValue = (e.target as unknown as { value: string }).value;
        onInput(newValue);
      }}
    />
  );
};

export const FileInput = ({
  onInput,
  value,
  ...p
}: Omit<TInputParams, "type" | "onInput" | "value"> & {
  value: File | undefined;
  onInput: (x: File | undefined) => void;
}) => {
  const [internalValue, setInternalValue] = React.useState(value);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => setInternalValue(value), [value]);
  React.useEffect(() => onInput(internalValue), [internalValue]);

  React.useEffect(() => {
    if (inputRef.current && !internalValue) inputRef.current.value = "";
  }, [internalValue]);

  return (
    <Input
      {...p}
      type="file"
      ref={inputRef}
      onInput={(e) => {
        const file = (e.target as unknown as { files: File[] }).files[0];
        onInput(file);
      }}
    />
  );
};

import { Button } from "../ui/button";

type TButtonProps = React.ComponentProps<typeof Button>;
export const ButtonTemplate = (p: TButtonProps) => {
  return <Button className="cursor-pointer disabled:cursor-not-allowed">{p.children}</Button>;
};

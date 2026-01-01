import { HeaderTemplate } from "./HeaderTemplate";
import { Modal } from "./modalTemplates/Modal";

export const PreserveScrollAbility = (p: {
  children: React.ReactNode;
  className?: HTMLDivElement["className"];
}) => <div className={`flex h-full flex-col ${p.className ?? ""}`}>{p.children}</div>;

export const Scroll = (p: {
  children: React.ReactNode;
  className?: HTMLDivElement["className"];
}) => <div className={`flex-1 overflow-y-auto ${p.className ?? ""}`}>{p.children}</div>;

export const MainLayout = (p: {
  children: React.ReactNode;
  className?: HTMLDivElement["className"];
}) => {
  return <div className={`p-6 ${p.className ?? ""}`}>{p.children}</div>;
};
export const MainFixedLayout = (p: { children: React.ReactNode }) => {
  return <PreserveScrollAbility>{p.children}</PreserveScrollAbility>;
};

export const LayoutTemplate = (p: {
  children: React.ReactNode;
  LeftHeader?: React.ReactNode;
  RightHeader?: React.ReactNode;
  LeftSidebar: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      {(p.LeftHeader || p.RightHeader) && (
        <HeaderTemplate Left={p.LeftHeader} Right={p.RightHeader} />
      )}

      <div className="flex flex-1 overflow-hidden">
        {p.LeftSidebar}

        <PreserveScrollAbility className="flex-1 overflow-y-auto">
          {p.children}
        </PreserveScrollAbility>
      </div>
      <Modal />
    </div>
  );
};

import { useConvexAuth } from "convex/react";

export const useAuth = () => {
  const convexAuth = useConvexAuth();

  return { status: convexAuth.isLoading ? undefined : convexAuth.isAuthenticated };
};

export const AuthSignedIn = (p: { children: React.ReactNode }) => {
  const auth = useAuth();

  return auth.status === true ? p.children : null;
};

export const AuthSignedOut = (p: { children: React.ReactNode }) => {
  const auth = useAuth();

  return auth.status === false ? p.children : null;
};

export const AuthLoading = (p: { children: React.ReactNode }) => {
  const auth = useAuth();

  return auth.status === undefined ? p.children : null;
};

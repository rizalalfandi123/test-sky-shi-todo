import type { PropsWithChildren } from "react";
import { Suspense } from "react";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return <Suspense fallback={<div>Loading</div>}>{children}</Suspense>;
};
